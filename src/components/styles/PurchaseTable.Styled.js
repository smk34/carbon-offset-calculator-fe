import styled from "styled-components";

const StyledPurchaseTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  th,
  td {
    padding: 0.5em 0;
  }

  tr:last-of-type td {
    padding-bottom: 0;
  }

 
  th {
    font-weight: 400;
    /* font-style: italic; */
    text-align: start;
    text-indent: 0.5em;
    opacity: 0.6;
    span {
      color: #000;
    }
  }

  tr th:not(th:last-of-type),
  tr:not(tr:last-of-type) td:not(td:last-of-type) {
    border-bottom: 1px solid #87ceeb;
    padding-right: 5px;
    padding-left: 5px;
  }

  tr td {
    vertical-align: top;
  }
  thead th:last-of-type,
  tr td:last-of-type {
    width: 38px;
    vertical-align: top;
  }

  tr:last-of-type {
    td:first-of-type button {
      /* margin-left: 0.3em; */
    }
    td:nth-of-type(2) {
      p {
        text-indent: 0.5em;
        margin-block-end: 0;
        margin-block-start: 0;
        span {
          opacity: 0.6;
        }
      }
    }
    td:last-of-type button {
      position: relative;
      bottom: 0.25em;
    }
  }

  /* td span {
    display: block;
    padding-top: 7px;
    opacity: 0.6;
  }

  thead th:first-of-type,
  tr td:first-of-type {
    width: 2em;
    text-align: center;
  } */
`;

export default StyledPurchaseTable;
