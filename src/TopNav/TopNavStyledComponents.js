import styled from 'styled-components';

export const TopNavContainer = styled.div`
  display: flex;
  background-color: #fff;
  display: none;
  margin-bottom: 16px;
  padding: 8px;

  @media (min-width: 800px) {
    display: block;
  }
`;

export const LinkWrapper = styled.span`
  a {
    margin-right: 12px;
    text-decoration: none;
  }
`;
