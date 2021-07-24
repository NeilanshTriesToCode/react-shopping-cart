// styles for Checkout page
import styled from 'styled-components';
import media from 'css-in-js-media';
import { CardWrapper } from '../../styled';

export const CheckoutTitle = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-bottom: 15px;
  text-align: normal;
  h3 {
    color: slategrey;
  }

  Button {
    float: right;
  }
`;

export const TableWrapper = styled(CardWrapper)`
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  width: 70%;

  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    padding: 5px;

    thead {
      font-size: calc(10px + 1vw);
      border-bottom: 1pt solid black;
    }

    th {
      padding-left: 15px;
      padding-bottom: 3px;
    }

    tbody > tr {
      border-bottom: 0.5pt solid lightgrey;
    }

    tr {
      font-size: calc(5px + 1vw);
    }

    td {
      padding: 15px;
    }

    tfoot {
      td {
        font-size: calc(10px + 2vw);
      }
    }

    ${media('<=desktop', '>tablet')} {
      width: 100%;

      td {
        padding: 5px;
      }
    }
    ${media('<=tablet', '>phone')} {
      width: 80%;

      td {
        padding: 5px;
      }
    }
    ${media('<=phone')} {
      width: 80%;

      td {
        padding: 5px;
      }
    }
  }
`;

export const StyledTable = styled.table``;

export const StyledTHead = styled.table``;
