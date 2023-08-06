import React from 'react';
import { styled } from 'styled-components';

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;
const Today = styled.h3`
  font-size: 18px;
  margin-bottom: 2rem;
  color: #aacb73;
`;

function Header() {
  return (
    <>
      <Title>🧸 TODAY 🧸</Title>
      <Today>{new Date().toDateString()}</Today>
    </>
  );
}

export default React.memo(Header);
