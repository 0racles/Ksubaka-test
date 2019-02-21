import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import Config from '../../../config';

const Wrapper = styled.div`
  background-color: ${Config.theme.colors.pink};
  color: ${Config.theme.colors.white};
  height: 9.375rem;
  padding: 1.25rem;
`;

const StyledImage = styled.img`
  height: 5rem;
`;

const Header = () => {
  return (
    <Wrapper className="header-title">
      <StyledImage src={logo} className="header-logo" alt="logo" />
      <h2>Ksubaka Tech Assessment</h2>
    </Wrapper>
  );
};

export default Header;
