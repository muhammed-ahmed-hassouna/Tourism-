import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { number } from "prop-types";

const CardLayout = () => {
  const [cards, setCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        // Handle the response data here
        setCard(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(cards);

  const totalPages = Math.ceil(cards.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentItems = cards.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisibleButtons = 3;
  const indexOfLastButton = Math.min(
    Math.max(currentPage + maxVisibleButtons - 1, maxVisibleButtons),
    pageNumbers.length
  );
  const indexOfFirstButton = Math.max(indexOfLastButton - maxVisibleButtons, 0);

  const visiblePageNumbers = pageNumbers.slice(
    indexOfFirstButton,
    indexOfLastButton
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4 max-w-5xl mx-auto">
        {currentItems.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-700 bg-white hover:bg-gray-200 text-gray-800"
          >
            <div
              className="h-40 md:h-52 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1517021897933-0e0319cfbc28)`,
              }}
            ></div>
            <div className="p-4 md:p-4 flex flex-col justify-between h-[163.8px]">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <Link to={`/blog/${card.id}`}>
                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Explore Blog
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 border text-black rounded-lg shadow"
          >
            Previous Page
          </button>
          <ul className="flex list-none">
            {visiblePageNumbers.map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number)}
                  className={`${currentPage === number
                    ? "bg-[#006f6f7a] w-10 text-black"
                    : "bg-[#00249b9c] w-10 text-gray-800"
                    } py-2 px-3 focus:outline-none rounded-lg`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === currentItems}
            className="px-4 py-2 border text-black rounded-lg shadow"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
