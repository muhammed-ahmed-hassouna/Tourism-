import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((response) => {
        // Handle the response data here
        setBlog(response.data);
        console.log(blog)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);


  console.log(blog);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center m-20">
      <img className="h-96 w-[291.5px] object-cover rounded-xl" src="https://www.ontheluce.com/wp-content/uploads/2012/11/petra-by-night.jpg.webp" alt="petra" />
      <div className="p-3 pt-6 w-auto lg:p-10 lg:w-[50%] text-start flex flex-col items-center gap-2">
        <h1 className="self-start text-3xl font-bold text-blue-900">{blog !== null
          ? blog[0].title
          : "Blog Title"}</h1>
        <h5 className="self-start text-lg text-gray-700">Written by: {blog !== null
          ? blog[0].authorname
          : "Author Name"}</h5>
        <h5 className="self-start text-lg text-gray-700">City: {blog !== null
          ? blog[0].city
          : "Blog City"}</h5>
        <p className="self-start text-medium">{blog !== null
          ? blog[0].details
          : "Blog Body"}</p>
      </div>
    </div>
  )
}

export default Blog
