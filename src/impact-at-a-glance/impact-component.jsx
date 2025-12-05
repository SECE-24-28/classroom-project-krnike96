import React from "react";
import { ImpactStyle } from "./impact-style";

const ImpactAtAGlanceComponent = () => {
  return (
    <ImpactStyle>
      <div className="parent">
        <div className="top-child">
          <p className="title">
            Impact at a <span className="glance">Glance</span>
          </p>
        </div>
        <div className="mid-child">
          <div className="kid-one-one">
            <div className="sub-title-container">
            <p className="sub-title">Colleges</p>
            <p className="numbers">100+</p>
            </div>
            <img className="images" loading="lazy" src="/src/impact-at-a-glance/images/college.png" alt="colleges" />
          </div>
          <div className="kid-one-two">
            <div className="sub-title-container">
            <p className="sub-title">Students</p>
            <p className="numbers">1,00,000</p>
            </div>
            <img src="/src/impact-at-a-glance/images/bagpack.png" alt="bagpack" className="images" />
          </div>
        </div>
        <div className="last-child">
          <div className="kid-two-one">
            <div className="sub-title-container">
            <p className="sub-title">Study Materials</p>
            <p className="numbers">1000+</p>
            </div>
            <img src="/src/impact-at-a-glance/images/books.png" alt="books" className="images" />
          </div>
          <div className="kid-two-two">
            <div className="sub-title-container">
            <p className="sub-title">Professional Trainers</p>
            <p className="numbers">150</p>
            </div>
            <img src="/src/impact-at-a-glance/images/people.png" alt="people" className="images" />
          </div>
        </div>
      </div>
    </ImpactStyle>
  );
};

export default ImpactAtAGlanceComponent;
