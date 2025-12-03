import styled from "styled-components";
export const PositioningStyle = styled.div`
  .element-one {
    background-color: aqua;
    width: 300px;
    height: 300px;
    position: sticky;
    // position: relative;
    top: 50px;
    // left: 500px;
  }
  .element-two {
    background-color: green;
    width: 300px;
    height: 300px;
  }
  .element-three {
    background-color: navy;
    width: 300px;
    height: 300px;
  }
  .element-four {
    background-color: magenta;
    width: 300px;
    height: 300px;
  }

  .square {
    background-color: red;
    width: 900px;
    height: 900px;
    position: absolute;
    // position: relative;
  }

  .square-one {
    background-color: black;
    width: 200px;
    height: 200px;
    position: relative;
    top: 200px;
    left: 500px;
  }
`;
