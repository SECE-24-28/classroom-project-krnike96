import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 60px;
  background: #fdf7ef;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: auto;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 54px;
  line-height: 1.2;
  color: #222;

  span {
    color: #008cff;
  }
`;

export const HeroText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #666;
`;

export const SearchBox = styled.div`
  margin-top: 40px;
  display: flex;
  background: white;
  border-radius: 40px;
  padding: 10px;
  width: 420px;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  // color-scheme: #FFFFFF;
   @media (max-width: 800px) {
    width: auto;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 10px;
  background-color: white;
  color: black;
`;

export const SearchBtn = styled.button`
  background: #34495e;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

export const HeroImage = styled.img`
  width: 48%;
   @media (max-width: 800px) {
   margin-top: 20px;
    width: 80%;
    height: 60%;
  }
`;
