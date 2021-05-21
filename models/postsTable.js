import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  owner: String,
  image: String,
});

const PostJob = mongoose.model("PostJob", postSchema);

export default PostJob;
