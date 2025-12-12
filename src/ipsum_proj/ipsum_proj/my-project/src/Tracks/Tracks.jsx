import React from "react";
import { TrackSection, TrackTitle, CardRow, Card } from "./TracksStyle";

const Tracks = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TrackSection>
        <TrackTitle>Our Tracks</TrackTitle>
        <p style={{color: "black"}}>Lorem Ipsum is simply dummy text of the printing.</p>

        <CardRow>
          <Card>
            <img src="/src/assets/uiux.jpg" />
            <h3>UI/UX Design for Beginners</h3>
            <p>$98</p>
          </Card>

          <Card>
            <img src="/src/assets/frontend.jpg" />
            <h3>Front-end Developer</h3>
            <p>$128</p>
          </Card>

          <Card>
            <img src="/src/assets/mern.jpg" />
            <h3>MERN Stack</h3>
            <p>$238</p>
          </Card>
        </CardRow>
      </TrackSection>
    </div>
  );
};

export default Tracks;
