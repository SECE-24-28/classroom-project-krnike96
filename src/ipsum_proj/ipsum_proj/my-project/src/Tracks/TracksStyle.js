import styled from "styled-components";

export const TrackSection = styled.section`
  padding: 80px 60px;
  text-align: center;
`;

export const TrackTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #222;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
  width: 100vh;;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: white;
  width: 320px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 16px;
  }

  h3 {
    margin: 16px 0 6px;
    color: #222;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;
