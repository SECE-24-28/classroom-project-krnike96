import styled from "styled-components";

export const CourseStyle = styled.div`
  .top-child {
    display: flex;
    text-align: center;
    gap: 1rem;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
  }

  .title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .top-content {
    font-size: 18px;
    text-align: center;
    margin-block: 8px;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: rgb(86, 102, 131);
    max-width: 700px;
  }

  .bottom-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 360px));
    place-items: center;
    gap: 1rem;
  }

  .common {
    border: 1px solid rgb(221, 221, 221);
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    gap: 0.8rem;
    position: relative;
  }

  .images {
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    aspect-ratio: 3 / 2;
    width: 100%;
    object-fit: cover;
  }

  .bottom-titles {
    font-family: "Work Sans", sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    display: inline-block;
    width: 100%;
  }

  .reco-duration {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }
`;
