// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   userId: { type: String, unique: true },
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true }, // Indexed for faster lookup
    password: { type: String, required: true },
    userId: { type: String, unique: true, index: true }, // Indexed for uniqueness
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  { timestamps: true } // Auto-adds createdAt & updatedAt
);

module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true, index: true },
//     password: { type: String, required: true },
//     userId: { type: String, unique: true, index: true },
//     resetToken: { type: String },
//     resetTokenExpiry: { type: Date },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);