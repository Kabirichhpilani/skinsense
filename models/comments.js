const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comment=new Schema({

     id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
     },
      review: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      likes: {
        type: Number,
        default: 0,
      },
      
});
const Comment = mongoose.model("Comment", comment);
module.exports = Comment;