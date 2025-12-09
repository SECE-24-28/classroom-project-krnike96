import styled from "styled-components";
export const SignUpPageStyle = styled.div`
  font-family: "Work Sans", sans-serif;
  .main {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .heading {
    font-size: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 1.25rem;
    border: 1px solid rgb(213, 213, 213);
    border-radius: 5px;
    width: inherit;
    background-color: rgb(245, 245, 245);
    grid-area: 1 / span 3;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .two-column {
    grid-template-columns: 1fr 1fr;
    display: grid;
    gap: 0.625rem;
  }

  .grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 0.625rem;
    grid-area: 1 / span 3;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;
