const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  Tipus: {
    type: Number
  },
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String 
  },
  id: { 
    type: String 
  },
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Active",
  },
});

module.exports = mongoose.model("AuthModel", authSchema);
