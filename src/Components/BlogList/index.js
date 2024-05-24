import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BlogItem from "../BlogItem";


export default function BlogList({ blogPosts }) {
  return (
    <div className="blog-list d-flex w-100">
      {blogPosts.map((blogPost, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
            }}
          >
            <BlogItem
              index={index}
              blogPost={blogPost}
              imageOrientation={"top"}
              setBlog={() => {} }
            />
          </div>
        );
      })}
    </div>
  );
}

BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};