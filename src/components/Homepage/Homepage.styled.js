// Styled Components for Homepage
import styled from 'styled-components';
import { Carousel } from 'rsuite';

export const HomepageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  .homepageTitleDiv {
    color: black;
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    h1 {
      font-weight: 100;
      font-size: 3vw;
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  background-color: whitesmoke;
  height: 30vw;
  width: 55vw;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;

  img {
    width: 10vw;
  }
`;
