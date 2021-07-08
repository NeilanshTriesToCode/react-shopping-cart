// re-usable styles for Components
import styled from 'styled-components';
import { Divider } from 'rsuite';

export const CardGrid = styled.div`
  text-align: center;
  justify-content: center;
`;

export const StyledDivider = styled(Divider)`
  width: 50%;
  background-color: lightgrey;
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.div`
  background-color: whitesmoke;
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

  // class for Product Cards
  &.product-card {
    height: 500px;
    width: 550px;

    .text-container {
      h3 {
        color: black;
      }

      p {
        font-size: 17px;
      }
    }

    .text-green {
      font-weight: 500;
      color: ${({ theme }) => theme.mainColors.green};
    }

    .text-red {
      font-weight: 600;
      font-style: italic;
      color: ${({ theme }) => theme.mainColors.red};
    }

    .text-blue {
      font-weight: 500;
      color: ${({ theme }) => theme.mainColors.blue};
    }

    .text-black {
      font-weight: 600;
      font-style: italic;
      color: ${({ theme }) => theme.mainColors.black};
    }
  }

  .img-wrapper {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;

    img {
      height: 250px;
      width: 100%;
    }
  }
`;
