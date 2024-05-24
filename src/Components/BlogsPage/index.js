import React, { useState, useEffect } from "react";

import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";
import BlogList from "../../Components/BlogList";
//import Footer from "../../Components/Footer";

import "../../App.css";
import "./index.css";

// Importing dummy data
const data = require("../../dummy-data.json");
let blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {
  //Initializing our states:
  const [categoryId, setCategoryId] = useState();
  const [blogs, setBlogs] = useState(blogPosts);
 // const [displayBlogs, setDisplayBlogs] = useState(blogPosts);
  
  useEffect(
    () => {
    if (categoryId) {
      const filterBlogs = blogPosts.filter((blog)=> {
        return blog.categories.some((category)=>category.id === categoryId)
      });
      setBlogs(filterBlogs);
    } 
  }, 
  [categoryId]
);


// return() => {
//   //cleanup code
// }

  const CategoriesList = ( {categoryId} ) => {
    return categories.map((category, index) => {
      return categoryId === category.id ? (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "blue" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      ) : (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId}/>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
        
      </div>
      {/* <Footer /> */}
    </>
  );

}
