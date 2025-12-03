import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      <h1 className="element">Akatsuki!</h1>
      <p>At AGH, we hunt jinchirikis aka tailed-beasts</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error pariatur reiciendis, neque, dolores quo nemo voluptates nulla optio quidem molestias officiis facilis dignissimos placeat doloribus culpa aperiam similique possimus incidunt!</p>
      <div className="button-parent">
        <button>start learning</button>
        <button>join a live Demo</button>
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;
