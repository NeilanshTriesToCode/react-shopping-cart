import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 15px;
  //border-bottom: 0.5px solid lightgray;
`;

export const StyledNavLink = styled(Link)`
  font-size: calc(
    10px + 1vw
  ); // at least 10px + 1vw (min-size is 10px when screen size is minimized)
  color: black;
  margin: 0 15px 2px; // center-margin: spacing between each StyledNavLink, last-margin: similar to margin-bottom
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: #2196f3;
  }

  &.active {
    text-decoration: none;
    color: #2196f3;
  }
`;
