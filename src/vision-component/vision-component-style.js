import styled from "styled-components";
export const VisionComponentStyle = styled.div`
  .parent {
    display: flex;
    flex-direction: column;
    background-color: rgba(237, 241, 248, 1);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .child-one {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Work Sans", sans-serif;
  }

  .child-one-title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .child-one-paragraph {
    max-width: 900px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    text-align: center;
    color: rgb(86, 102, 131);
    font-family: "Work Sans", sans-serif;
  }

  .child-two {
    display: flex;
    gap: 2rem;
    max-width: 1280px;
    margin: 0px auto;
    font-family: "Work Sans", sans-serif;
  }

  .subheader-vision {
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .divider {
    width: 0.5rem;
    background-color: rgba(211, 211, 21, 1);
  }

  .subheader-mission {
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .subheader-paragraph {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    color: rgb(86, 102, 131);
    font-family: "Work Sans", sans-serif;
  }

  @media (max-width: 900px) {
    .child-two {
      flex-direction: column;
    }
    .divider {
      height: 0.5rem;
      width: 100%;
      background-color: rgba(211, 211, 211, 1);
    }
  }
`;
