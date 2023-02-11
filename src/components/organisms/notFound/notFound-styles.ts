import styled from 'styled-components';

export const StyledContainer = styled.div`
  grid-column: 1 /3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 17rem;
    margin-bottom: 5vh;
    opacity: 0.6;
  }
  p {
    margin: 4rem 10vw;
  }
`;
