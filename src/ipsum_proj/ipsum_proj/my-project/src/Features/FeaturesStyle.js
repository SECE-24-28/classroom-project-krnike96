import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: 70px 60px;
  background: #faf5eb;

  h1 {
    text-align: center;
    font-size: 40px;
    color: #222;
  }
  span {
    color: #008cff;
  }
`;

export const FeatureGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const FeatureBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  h3 {
    margin-bottom: 10px;
    color: #222;
  }

  p {
    color: #666;
  }
`;
