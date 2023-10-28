import React from "react";
import axios from 'axios';
import { useState } from "react";

const AddBlog = () => {


  const [image, setImage] = useState();

  const [formData, setFormData] = useState({
    title: "",
    authorname: "",
    city: "",
    image_data: "",
    details: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUploadImage = (event) => {
    setImage(event.target.files[0])
  };

  async function handleSubmit(event) {
    event.preventDefault();
    
    console.log({...formData, image : image});
    try {

      const res = await axios.post(`http://localhost:5000/BlogPost`, {...formData, image : image});
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section class="dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-start text-transparent bg-clip-text px-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
              Add your own journey
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="title"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter title"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="author"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="authorname"
                  value={formData.authorname}
                  id="author"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="city"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  id="city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholFder="Enter your name"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="blogImage"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Upload your journey view
                </label>
                <input
                  name="image_data"
                  class="file:p-2.5 file:bg-gradient-to-r file:from-[#006f6f57] file:to-[#00249b5c] file:border-0 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="blog-image_help"
                  id="blogImage"
                  type="file"
                  required="true"
                  onChange={handleUploadImage}
                />
              </div>
              <div>
                <label
                  for="description"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter a description of your blog..."
                  required="true"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
