const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 300,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (timestamp) => {
        const date = new Date();
        return (
          date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
        );
      },
    },
    username: {
      type: String,
      required: true,
    },
    // reactions: [
    //   reactionSchema
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
