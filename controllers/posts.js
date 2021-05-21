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
export const createPost = async(req, res) => {
  const newPost = new PostJob(req.body);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.json({ message: error.message });
  }
};
