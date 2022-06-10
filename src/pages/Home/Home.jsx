import React from "react";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Details/Details";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import StudentsReviews from "../../components/StudentsReviews/StudentsReviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Courses />
      <Details />
      <StudentsReviews />
      <Footer />
    </div>
  );
};

export default Home;
