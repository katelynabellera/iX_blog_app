const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: blog,
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const getBlogsByID = async (id) => {
  try {
    const data = await fetch(
      "http://localhost:8000/api/blogs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    throw new Error(error);
  }
};



const getBlogs = async () => {
  try {
    const data = await fetch(
      "http://localhost:8000/api/blogs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getBlogsByCategoryId = async (categoryId) => {
  try {
    const data = await fetch(
      "http://localhost:8000/api/blogs/category/" +
        categoryId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getBlogsByAuthorId = async (authorId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/author/" + authorId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const updateBlog = async (blog) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/" + blog.get("id"),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: blog,
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const deleteBlogsById = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};


const blogService = {
  createBlog,
  getBlogsByID,
  getBlogs,
  getBlogsByCategoryId,
  getBlogsByAuthorId,
  updateBlog,
  deleteBlogsById,
};

export default blogService;