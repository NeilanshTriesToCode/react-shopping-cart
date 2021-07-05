// styles for the CategoryGrid Component
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: darkslategrey;
  text-decoration: none;

  h3 {
    font-size: 25px;
  }

  h5 {
    font-size: 15px;
    font-style: italic;
  }

  :hover {
    color: black;
    text-decoration: none;
    box-shadow: 1px 2px 5px black;
  }
`;
