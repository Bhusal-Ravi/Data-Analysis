const mongoose= require("mongoose")

const DatasetSchema= mongoose.Schema({
      name: String,
  columns: [String],
  data: [{}], 
  uploadedAt: Date,
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Foreign Key to User model
      required: true
    }
});

module.exports= mongoose.model('Dataset',DatasetSchema)