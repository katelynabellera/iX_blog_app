import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";
import BlogList from "../../Components/BlogList";
//mport Footer from "../../Components/Footer";

import { useParams, Link } from "react-router-dom";

import "./index.css";

import blogService from "../../Services/blogService";
import categoryService from "../../Services/categoryService";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const blogsRes = await blogService.getBlogsByCategoryId(categoryId);
      const categoriesRes = await categoryService.getCategories();

      setBlogs(blogsRes);
      setCategories(categoriesRes);
      setLoading(false);
      }
      else {
        const blogsRes = await blogService.getBlogs();
      const categoriesRes = await categoryService.getCategories();

      setBlogs(blogsRes);
      setCategories(categoriesRes);
      setLoading(false);
      }
      
    };

    fetchData();
  }, [categoryId]);

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
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
//old code
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import Navbar from "../../Components/Navbar";
// import Heading from "../../Components/Heading";
// import BlogList from "../../Components/BlogList";
// //import Footer from "../../Components/Footer";

// import "../../App.css";
// import "./index.css";
// import blogService from "../../Services/blogService";
// import categoryService from "../../Services/categoryService";

// // Importing dummy data
// const data = require("../../dummy-data.json");
// let blogPosts = data.blogPosts;
// const categories = data.categories;

// export default function BlogsPage() {
//   //Initializing our states:

//   // const { categoryId } = useParams()

//   const [categoryId, setCategoryId] = useState();
//   const [categories, setCategories] = useState();
//   const [blogs, setBlogs] = useState(blogPosts);
//   const [loading, setLoading] = useState(true);

//  // const [displayBlogs, setDisplayBlogs] = useState(blogPosts);
  
// //   useEffect(
// //     () => {
// //     if (categoryId) {
// //       const filterBlogs = blogPosts.filter((blog)=> {
// //         return blog.categories.some((category)=>category.id === categoryId)
// //       });
// //       setBlogs(filterBlogs);
// //     } 
// //   }, 
// //   [categoryId]
// // );

// useEffect(() => {
//   const fetchData = async () => {
//     const blogsRes = await blogService.getBlogsByCategoryId(categoryId);
//     const categoriesRes = await categoryService.getCategories();

//     setBlogs(blogsRes);
//     setCategories(categoriesRes);
//     setLoading(false);
//   };

//   fetchData();
// }, [categoryId]);


// // return() => {
// //   //cleanup code
// // }

//   const CategoriesList = ( {categoryId} ) => {
//     return categories.map((category, index) => {
//       return categoryId === category.id ? (
//         <button
//           key={index}
//           onClick={() => setCategoryId(category.id)}
//           style={{ color: "blue" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       ) : (
//         <button
//           key={index}
//           onClick={() => setCategoryId(category.id)}
//           style={{ color: "black" }}
//         >
//           <p key={index}>{category.title}</p>
//         </button>
//       );
//     });
//   };

//   if (loading) {
//     return (
//       <div class="spinner-border" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>
//     )
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Heading />
//         <div className="scroll-menu">
//           <CategoriesList categoryId={categoryId}/>
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <p className="page-subtitle">Blog Posts</p>
//         </div>
//         <BlogList blogPosts={blogs} />
        
//       </div>
//       {/* <Footer /> */}
//     </>
//   );

// }
