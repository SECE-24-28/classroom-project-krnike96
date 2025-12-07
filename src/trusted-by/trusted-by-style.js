import styled from "styled-components";
export const TrustedByStyle = styled.div`
  .parent {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    max-width: 1800px;
    margin: 0px auto;
    gap: 2rem;
  }
  .title {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 48px;
    text-align: center;
  }
  .element {
    display: flex;
    justify-content: space-evenly;
    border-radius: 20px;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem 0px;
  }

  .item {
    --shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    --circle-width: 90px;
    padding: 0.8rem;
    border-radius: 10px;
    background-color: white;
    position: relative;
    animation: 1s linear CDTjF;
    z-index: 2;
  }

  .main-area {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    box-shadow: var(--shadow);
    width: 230px;
    height: 200px;
  }

  .image-boundary-up {
    position: absolute;
    left: 50%;
    bottom: 0px;
    width: var(--circle-width);
    height: var(--circle-width);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    top: 0px;
    translate: -50% -50%;
  }

  .image-boundary-down {
    position: absolute;
    left: 50%;
    bottom: 0px;
    translate: -50% 50%;
    width: var(--circle-width);
    height: var(--circle-width);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
  }

  .image {
    width: calc(var(--circle-width) - 20px);
    height: calc(var(--circle-width) - 20px);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    background-color: rgb(255, 255, 255);
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
  }

  .subtitle {
    font-size: 40px;
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    color: gray;
  }

  .para {
    font-size: 20px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: gray;
  }
  .lower-background {
    border-radius: 10px;
    height: 50%;
    width: 100%;
    z-index: -1;
    left: 0px;
    right: 0px;
    position: absolute;
    top: initial;
    bottom: 0px;
  }

  .upper-background {
    border-radius: 10px;
    height: 50%;
    width: 100%;
    z-index: -1;
    left: 0px;
    right: 0px;
    top: 0px;
    position: absolute;
  }

  .svg-inline--fa {
    height: 2em;
  }
`;
