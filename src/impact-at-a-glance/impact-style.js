import styled from "styled-components";

export const ImpactStyle = styled.div`
  .parent {
    display: flex;
    flex-direction: column;
    justify-comtent: center;
    align-items: center;
  }

  .mid-child {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    -moz-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    -moz-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 50px;
  }

  .title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    font-family: "Inter", sans-serif;
    margin-bottom: 2rem;
  }

  .glance {
    color: rgb(252, 41, 71);
  }

  .sub-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: rgb(51, 65, 85);
  }

  .numbers {
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 20px;
    color: rgb(0, 0, 0);
  }

  .kid-one-one {
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: "Inter", sans-serif;
    overflow: visible;
    z-index: 1;
    background-color: rgb(255, 223, 228);
  }

  .kid-one-two {
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: "Inter", sans-serif;
    overflow: visible;
    z-index: 1;
    background-color: rgb(226, 240, 250);
  }

  .kid-two-one {
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: "Inter", sans-serif;
    overflow: visible;
    z-index: 1;
    background-color: rgb(222, 255, 236);
  }

  .kid-two-two {
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: "Inter", sans-serif;
    overflow: visible;
    z-index: 1;
    background-color: rgb(255, 230, 199);
  }

  .sub-title-container {
    padding-top: 0px;
  }

  .images {
    position: absolute;
    bottom: -25px;
    right: 20px;
    height: 120px;
    width: auto;
    object-fit: contain;
    z-index: 2;
  }
`;
