import React, { useState, useEffect } from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
//import Footer from "../Footer";
import SubHeading from "../Subheading";
import CategoryList from "../CategoryList";
import blogService from "../../Services/blogService";
import categoryService from "../../Services/categoryService";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

export default function HomePage() {

  const [blogs, setBlogs] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await blogService.getBlogs();
        const categoryRes = await categoryService.getCategories();

        setBlogs(blogsRes);
        setCategories(categoryRes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        {/* <BlogList blogPosts={blogs}></BlogList> */}
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        {/* <CategoryList categories={categories}></CategoryList> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}