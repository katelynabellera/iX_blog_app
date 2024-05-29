import React from "react";
import PropTypes from "prop-types";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
              borderRadius: 10,
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}

Categories.prototype = {
  blogPost: PropTypes.object.isRequired,
}