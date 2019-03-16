import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const schema = new Schema({
  description: String,
  images: [ String ],
  date: String,
  status: String
  // status: {
  //   type: Types.ObjectId,
  //   ref: 'PostStatus',
  // },
});


export default mongoose.model('Post', schema);
