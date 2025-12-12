import styled from "styled-components";

export const NewsletterContainer = styled.section`
  width: 80%;
  height: 200px;
  background: #3e4c59;
  color: white;
  text-align: center;
  padding: 80px 20px;

  h1 {
    font-size: 32px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    opacity: 0.9;
  }
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const EmailBox = styled.div`
  margin: 30px auto 0;
  background: white;
  width: 420px;
  padding: 10px;
  border-radius: 40px;
  display: flex;
`;

export const EmailInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-left: 15px;
  background-color: white;
  color: black;
`;

export const EmailBtn = styled.button`
  padding: 12px 24px;
  background: #34495e;
  color: white;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
