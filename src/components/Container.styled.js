import styled from 'styled-components';

export const Container = styled.div`
  height: '100vh';
  display: 'flex';
  flex-direction: column;

  flex-wrap: wrap;
  justify-content: 'center';
  align-items: 'center';
  font-size: 40;
  color: ${p => p.theme.colors.black};

  gap: 20px;
  padding-top: 50px;
  padding-left: 50px;

  h2 {
    display: inline;
  }

  p {
    display: inline;
  }
`;
