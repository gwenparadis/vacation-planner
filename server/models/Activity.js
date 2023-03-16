const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = require("./Comment")

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  activityDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  comments: [commentSchema]
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = { Activity, activitySchema };
