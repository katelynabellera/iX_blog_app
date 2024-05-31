import React, { useState, useEffect } from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
//import Footer from "../Footer";
import SubHeading from "../Subheading";
import CategoryList from "../CategoryList";
import blogService from "../../Services/blogService";
import categoryService from "../../Services/categoryService";
import SuccessToast from "../SuccessToast";
import ErrorToast from "../ErrorToast";
import Loading from "../Loading";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const blogs = await blogService.fetchBlogs();
        setBlogs(blogs.data.reverse());
        setIsSuccess(true);
        setMessage(blogs.message);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  }

   const resetError = () => {
    setIsError(false);
    setMessage("");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        {/* <Footer /> */}
      </div>
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={resetSuccess}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={resetError}
      />
    </>
  );
}