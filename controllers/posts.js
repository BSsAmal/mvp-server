import PostJob from "../models/postsTable.js";

//get all the data from db
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostJob.find();

    res.json(postMessages);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// create a new post
export const createPost = async (req, res) => {
  const newPost = new PostJob(req.body);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update a post that already exist

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  const updatePost = await PostJob.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatePost);
};

// delete a post

export const deletePost = async (req, res) => {
  const { id } = req.params;

  await PostJob.findByIdAndRemove(id);

  res.json({ message: "post deleted" });
};
