import styled from "styled-components";

export const OurPromiseStyle = styled.div`
  .parent {
    padding-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1800px;
    margin: 1rem auto;
    border-radius: 10px;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .top-child-content {
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
  }
  .promises {
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    font-family: Work Sans, normal, sans-serif;
    font-size: 16px;
  }

  .element {
    border-top: 4px solid;
    display: flex;
    max-width: 380px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    box-sizing: border-box;
    list-style-type: none;
    font-family: Work Sans, normal, sans-serif;
    font-size: 16px;
  }

  .top-code {
    border-color: rgb(68, 178, 179);
  }

  .responsiveness {
    border-color: rgb(239, 175, 75);
  }

  .rockstar-team {
    border-color: rgb(0, 189, 235);
  }

  .fast-turn-arounds {
    border-color: rgb(134, 74, 249);
  }

  .life-time-support {
    border-color: rgb(252, 41, 71);
  }

  .secured-agreement {
    border-color: rgb(50, 199, 102);
  }

  .item {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    gap: 17px;
    font-family: Work Sans, normal, sans-serif;
  }

  .item-title {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
  }

  .elem-content {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);
  }

  .code-icon {
    color: rgb(68, 178, 179);
    font-size: 2em;
  }
  .responsiveness-icon {
    color: rgb(239, 175, 75);
    font-size: 2em;
  }
  .rockstar-icon {
    color: rgb(0, 189, 235);
    font-size: 2em;
  }
  .fast-icon {
    color: rgb(134, 74, 249);
    font-size: 2em;
  }
  .life-time-icon {
    color: rgb(252, 41, 71);
    font-size: 2em;
  }
  .secured-icon {
    color: rgb(50, 199, 102);
    font-size: 2em;
  }
`;
