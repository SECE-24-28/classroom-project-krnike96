import styled from "styled-components";
export const TableContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 1rem;
  color: white;
  font-family: system-ui, -apple-system, sans-serif;
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  thead {
    background: #4f46e5;
    color: white;
  }

  th {
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }

  tbody {
    background: #242424;
  }

  tr {
  }

  td {
    padding: 1rem 1.5rem;

    &:last-child {
      border-bottom: none;
    }
  }

  div {
    max-width: 800px;
    margin: 3rem auto;
    padding: 0 1rem;
  }
`;
