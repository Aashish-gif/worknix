// const mongoose = require("mongoose");

// const companySchema = new mongoose.Schema({
//   companyName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   companyId: { type: String, unique: true },
// });

// module.exports = mongoose.model("Company", companySchema);
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    companyId: { type: String, unique: true, index: true },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
