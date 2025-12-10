import styled from "styled-components";

export const FurnitureComponentStyle = styled.div`
  .parent {
    display: flex;
    justify-content: center;
  }

  .child-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }

  .title-content {
    font-weight: 700;
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  .child-two-img {
    width: 621px;
    height: 521px;
    left: 819px;
    border-top-left-radius: 266px;
    border-bottom-left-radius: 266px;
  }

  .two-buttons {
    display: flex;
  }

  .shop-now {
    color: white;
    background-color: black;
    font-weight: 700;
    width: 200px;
    height: 56px;
    border-radius: 8px;
    padding: 16px 24px 16px 24px;
    gap: 10px;
  }

  .check-arrival {
    font-weight: 700;
    width: 200px;
    height: 56px;
    border-radius: 8px;
    padding: 16px 24px 16px 24px;
    gap: 10px;
  }
`;
