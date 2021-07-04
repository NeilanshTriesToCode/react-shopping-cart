import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
`;

export const StyledNavLink = styled(Link)`
  font-size: 25px;
  margin: 0 10px;
  text-decoration: none;

  :hover {
    border-radius: 5px;
    text-decoration: none;
    color: blueviolet;
  }

  &.active {
    font-size: 27px;
    color: blueviolet;
    font-weight: bold;
  }
`;
