import React from "react";
import "./Details.css";
import details from "../../assets/data/details.json";
import SingleInfo from "../SingleInfo/SingleInfo";

const Details = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            WHY WE ARE THE BEST
          </h1>
          <h2 className="text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">
            Explore our hidden secrets why we are the best
          </h2>
        </div>
        <div className="flex flex-wrap">
          {details.map((singleInfo) => (
            <SingleInfo
              key={singleInfo.id}
              singleInfo={singleInfo}
            ></SingleInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
