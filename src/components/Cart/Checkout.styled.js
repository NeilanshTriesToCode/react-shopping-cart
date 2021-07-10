// styles for Checkout page
import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  padding: 5px;

  &.checkout {
    thead {
      font-size: 25px;
      border-bottom: 1pt solid black;
    }

    th {
      padding-left: 15px;
      padding-bottom: 3px;
    }

    tr {
      font-size: 20px;
    }

    td {
      padding: 15px;
    }
  }
`;

export const StyledTHead = styled.table``;
