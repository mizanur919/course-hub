import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import courses from "../../assets/data/courses.json";
import Course from "../Course/Course";

const Courses = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h1 className="text-4xl mb-3">Explore top courses</h1>
        <p className="text-1xl mb-8">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us!
        </p>
        <div className="flex flex-wrap -m-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
