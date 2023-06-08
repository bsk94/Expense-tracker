import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 57rem;
  overflow-y: scroll;
  height: 30rem;

  li {
    background-color: ${({ theme }) => theme.colors.lightest};
    display: flex;
    justify-content: space-between;
    margin: 1rem 0rem;
    width: 100%;
    transition: transform 0.15s ease;
  }
`;

export const StyledConatiner = styled.div`
  width: 100%;
  max-width: 57rem;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const StyledParagraf = styled.span`
  display: flex;
  align-self: flex-end;
  font-size: 1.5rem;
  margin-right: 2rem;
`;
