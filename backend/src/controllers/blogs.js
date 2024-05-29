const Blog = require("../models/Blog");

const createBlogs = async (req, res) => {
    console.log(req.body);

    const blog = new Blog({
      title: req.body.title,
      categoryIds: req.body.categoryIds,
      readTime: req.body.readTime,
      description: req.body.description,
      image: req.body.image,
      content: req.body.content,
      authorId: req.body.authorId,
    })

    await blog.save();

    res.status(200).json({
      message: "Blog created!",
      data: [],
    });
  };
  
  const getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ message: "Return all blogs!", data: blogs });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const getBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog) {
        res.status(200).json({ message: "Return blog by ID!", data: blog });
      } else {
        res.status(404).json({ message: "Blog not found!", data: [] });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  // const getBlogs = async (req, res) => {

  //   const blogs = await Blog.find();
    
    


  //   res.status(200).json({
  //     message: "Get all blogs!",
  //     data: blogs,
  //   });
  // };
  
  const getBlogById = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Get blog by ID!",
      data: [],
    });
  };
  
  const getBlogsByCategoryID = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Get blogs by categoryID!",
      data: [],
    });
  };
  
  const updateBlogByID = (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog updated!",
      data: [],
    });
  };
  
  const deleteBlogByID = (req, res) => {
    console.log(req.params.id);
    res.status(200).json({
      message: "Blog deleted!",
      data: [],
    });
  };
  
  module.exports = {
    createBlogs,
    getBlogs,
    getBlogById,
    getBlogsByCategoryID,
    updateBlogByID,
    deleteBlogByID,
  };