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
      font-weight: 800;
      font-size: 40px;
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  background-color: whitesmoke;
  width: 800px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;
