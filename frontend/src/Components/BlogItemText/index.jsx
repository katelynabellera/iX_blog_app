
import React from "react";
import PropTypes from "prop-types";

import Categories from "../Categories";
import "./index.css";

export default function BlogItemText({ blogPost, headerFontSize }) {
  //console.log(blogPost);
  console.log("this should be an array\n" + blogPost?.categories)
  console.log( blogPost)
  console.log(typeof(blogPost?.categories))
  console.log(typeof(Object.values(blogPost?.categories)))
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className="date-author-text">
           {blogPost.author.firstName} {blogPost.author.lastName}
        </p> 
         <div className="dot-divider"></div>
        <p className="date-author-text">
          {blogPost.createdAt.substring(0, 10)}
        </p>
      </div>
      <p
        style={{
          fontSize: headerFontSize,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {blogPost.title}
      </p>
      <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
        {blogPost.description.substring(0, 100)}...
      </p>
      <Categories blogPost={blogPost} />
      {/* <Categories blogPost={Object.values(blogPost?.categories)}/>
      <Categories blogPost={[1, 2, 4]}/> */}
    </div>
  );
}
BlogItemText.propTypes = {
  blogPost: PropTypes.array.isRequired,
  headerFontSize: PropTypes.string.isRequired,
};
