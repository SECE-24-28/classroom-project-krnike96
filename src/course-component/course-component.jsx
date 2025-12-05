import React from "react";
import { CourseStyle } from "./course-style";

const CourseComponent = () => {
  return (
    <CourseStyle>
      <div className="parent">
        <div className="top-child">
          <h2 className="title">Our Courses</h2>
          <p className="top-content">
            Explore a wide range of curated courses for every learner.
            Structured to enhance knowledge, skills, and career growth.
          </p>
        </div>
        <div className="bottom-child">
          <div className="item-one common">
            <img
              src="/src/course-component/images/aptitude.jpg"
              alt="aptitude"
              className="images"
            />
            <h2 className="bottom-titles">Aptitude Complete Preparation</h2>
            <span className="reco-duration">
              <div>Recommended: Final year students</div>
              <div>Duration: 1 year</div>
            </span>
            <div>
              <div>12,000</div>
              <span>+ GST</span>
              <div>24,999</div>
            </div>
            <div className="buttons">
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </CourseStyle>
  );
};

export default CourseComponent;
