const mongoose = require('mongoose')
// Create a medicine schema
const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    unit: { type: String, required: true },
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
  },
  {
  timestamps :true,
  }
  );
  // Create a medicine model
const MedicineMode = mongoose.model('MedicineModel', medicineSchema);
module.exports = MedicineMode;