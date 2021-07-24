// re-usable styles for Components
import styled from 'styled-components';
import { Button, Divider } from 'rsuite';
import media from 'css-in-js-media'; // for responsive design for Styled Components

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
    margin-left: auto;
    margin-right: auto;
    height: calc(250px + 18vw);
    width: calc(250px + 20vw);

    .text-container {
      height: fit-content;
      width: fit-content;
      h3 {
        font-size: calc(15px + 1vw);
        color: black;
      }

      p {
        font-size: calc(5px + 1vw);
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
      height: 15vw;
      width: 100%;
    }

    ${media('<=desktop', '>tablet')} {
      width: 80%;
    }
  }

  // media queries for responsive design for Styled-Components
  ${media('>desktop')} {
    width: 50%;
  }
  ${media('<=desktop', '>tablet')} {
    width: 80%;
  }
  ${media('<=tablet', '>phone')} {
    width: 80%;
  }
  ${media('<=phone')} {
    width: 80%;
  }
`;
