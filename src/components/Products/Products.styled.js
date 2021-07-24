// Styled Components for Products page
import styled from 'styled-components';
import media from 'css-in-js-media';

export const MainWrapper = styled.div`
  display: 'flex';
  flex-wrap: wrap;
`;

export const FiltersWrapper = styled.div`
  background-color: whitesmoke;
  border: 1pt solid lightgrey;
  border-radius: 5px;
  width: 10%;
  margin-left: 40px;
  margin-right: auto;
  padding: 15px;
  position: fixed;

  ${media('<=desktop', '>tablet')} {
    width: 10%;
  }
  ${media('<=tablet', '>phone')} {
    width: 40%;
  }
  ${media('<=phone')} {
    width: 50%;
  }
`;

export const ProductsWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  ${media('<=tablet', 'phone')} {
    width: 30%;
  }
`;
