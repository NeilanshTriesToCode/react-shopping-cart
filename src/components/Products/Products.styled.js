// Styled Components for Products page
import styled from 'styled-components';
import media from 'css-in-js-media';

export const MainWrapper = styled.div`
  position: relative;

  ${media('<=desktop', '>tablet')} {
    width: 20%;
  }
  ${media('<=tablet', '>phone')} {
    width: 50%;
  }
  ${media('<=phone')} {
    width: 50%;
  }
`;

export const FiltersWrapper = styled.div`
  background-color: whitesmoke;
  border: 1pt solid lightgrey;
  border-radius: 5px;
  width: 15%;
  margin-left: 40px;
  margin-right: auto;
  padding: 15px;
  position: fixed;

  ${media('<=desktop', '>tablet')} {
    width: 20%;
  }
  ${media('<=tablet', '>phone')} {
    margin-left: auto;
    margin-right: 0;
    width: 30%;
  }
  ${media('<=phone')} {
    width: 30%;
  }
`;

export const ProductsWrapper = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  //border: 1pt solid black;

  ${media('<=desktop', '>tablet')} {
    margin-right: 0;
  }
  ${media('<=tablet', '>phone')} {
    margin-right: 0;
  }
  ${media('<=phone')} {
    margin-right: 0;
  }
`;
