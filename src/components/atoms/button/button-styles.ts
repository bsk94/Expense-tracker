import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 3.8rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: none;
  border-radius: 45rem;
  font-size: 2rem;

  :disabled {
    opacity: 0.3;
  }
`;
