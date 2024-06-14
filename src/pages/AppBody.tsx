import React from 'react';
import styled from 'styled-components';
import './style.css';
export const BodyWrapper = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  padding: 0.2rem;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px,
    rgba(0, 0, 0, 0.01) 0px 24px 32px;
  background: linear-gradient(110.98deg, rgba(255, 255, 255, 0.2) 6.53%, rgba(255, 255, 255, 0.16) 98.51%);
  backdrop-filter: blur(61.1654px);

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 90%;
  `}
`;

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>;
}
