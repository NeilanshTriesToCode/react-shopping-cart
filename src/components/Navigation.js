// React Component to Navigate to different pages of the App
import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { NavWrapper, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  // get current page location
  const location = useLocation();

  // list of Nav links
  const LINKS = [
    { to: '/categories', linkName: 'Categories' },
    { to: '/products/allProducts', linkName: 'Products' },
  ];

  return (
    <NavWrapper>
      {LINKS.map(ele => (
        <StyledNavLink
          key={ele.to}
          to={ele.to}
          className={ele.to === location.pathname ? 'active' : ''}
        >
          {ele.linkName}
        </StyledNavLink>
      ))}
    </NavWrapper>
  );
};

export default memo(Navigation);
