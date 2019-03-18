import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const schema = new Schema({
  description: String,
  date: { type: Date, default: Date.now },
  status: String,
  // images: [ String ],
  // status: {
  //   type: Types.ObjectId,
  //   ref: 'PostStatus',
  // },
});


export default mongoose.model('Post', schema);
