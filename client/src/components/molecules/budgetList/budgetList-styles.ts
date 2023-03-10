import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 57rem;
`;

export const StyledParagraf = styled.span`
  display: flex;
  align-self: flex-end;
  font-size: 1.5rem;
`;

export const StyledPaginationWrapper = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  span {
    background-color: ${({ theme }) => theme.colors.midGreen};
    width: 4.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }
`;
