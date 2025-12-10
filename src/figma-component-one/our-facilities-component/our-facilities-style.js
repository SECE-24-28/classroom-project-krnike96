import styled from "styled-components";

export const OurFacilitiesStyle = styled.div`
  background-color: #fcf6f0;
  padding: 40px 20px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  .parent {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .facility {
    flex: 1;
    max-width: 250px;
    text-align: center;
    padding: 10px;
  }

  .icon {
    margin-bottom: 15px;
    i {
      font-size: 30px;
      color: #333;
    }
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }

  .body {
    font-size: 14px;
    color: #555;
  }
`;
