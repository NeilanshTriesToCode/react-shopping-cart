// re-usable styles for Components
import styled from 'styled-components';

export const CardGrid = styled.div`
  text-align: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: 20px;
  padding: 50px;
  border: 1pt grey;
  box-shadow: 1px 2px 6px lightgrey;

  :hover {
    box-shadow: 1px 2px 5px grey;
  }
`;
