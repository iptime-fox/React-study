import React from 'react';
import { styled } from 'styled-components';

const Title = styled.h3`
  font-size: 30px;
  color: #ffacac;
`;
const Today = styled.h3``;

function Header() {
  return (
    <>
      <Title>🧸 Today 🧸</Title>
      <Today>{new Date().toDateString()}</Today>
    </>
  );
}

export default Header;
