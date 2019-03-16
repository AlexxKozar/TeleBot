import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String
});

const PostStatusModel = mongoose.model('PostStatus', schema);

export default PostStatusModel
