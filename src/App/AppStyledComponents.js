import styled from 'styled-components';
import woodBackground from '../assets/wood_background.jpg';

export const AppContainer = styled.div`
  background-image: url(${woodBackground});
  height: 100vh;
  width: 100vw;
  padding: 36px 0;
`;

export const AppContent = styled.div`
  padding: 16px;
  width: 80%;
  max-width: 1200px;
  margin: auto;
`;

export const MainContent = styled.div`
  width: 100%;
  background-color: #fff;
`;
