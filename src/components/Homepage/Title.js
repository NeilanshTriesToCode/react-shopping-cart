// React Component to display Title. Used in the Homepage Component
import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled'; // custom-styled for the Title Component

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </TitleWrapper>
  );
};

export default memo(Title);
