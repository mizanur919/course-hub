import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({ course }) => {
  const { title, image, category, price } = course;
  return (
    <div className="px-2 py-4 lg:w-1/4 md:w-1/2 w-full">
      <div className="border-gray-200 border p-4 rounded-lg">
        <Link to="/" className="block relative h-48 rounded overflow-hidden">
          <img
            alt={title}
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </Link>
        <div className="my-4">
          <h2 className="text-gray-900 title-font text-2xl font-medium">
            {title}
          </h2>
          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1 leading-8">
            {category}
          </h3>
          <p className="mt-1 text-xl">${price}</p>
        </div>
        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Course;
