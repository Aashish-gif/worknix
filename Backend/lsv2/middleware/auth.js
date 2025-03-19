const jwt = require("jsonwebtoken");
const Company = require("../models/Company");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("Received token in auth middleware:", token); // Debug
    if (!token) {
      return res.status(401).json({ success: false, message: "Access denied: No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Debug

    // Check userType and fetch the corresponding entity
    if (decoded.userType === "company") {
      const company = await Company.findById(decoded.id);
      if (!company) {
        return res.status(404).json({ success: false, message: "Company not found" });
      }
      req.company = company;
      req.userType = "company";
    } else if (decoded.userType === "user") {
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      req.user = user;
      req.userType = "user";
    } else {
      return res.status(400).json({ success: false, message: "Invalid user type" });
    }

    req.token = token;
    req.userId = decoded.id; // Add userId to the request for use in routes
    next();
  } catch (error) {
    console.error("Token verification error:", error.message); // Debug
    res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = auth;