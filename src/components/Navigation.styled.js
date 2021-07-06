import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  //border-bottom: 0.5px solid lightgray;
`;

export const StyledNavLink = styled(Link)`
  font-size: 25px;
  color: #2196f3;
  margin: 0 10px 25px;
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: blueviolet;
  }

  &.active {
    text-decoration: none;
    color: blueviolet;
    border-bottom: 1.5pt solid blueviolet;
  }
`;
