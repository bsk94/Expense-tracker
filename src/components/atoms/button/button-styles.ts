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

  &.notFound__btn--goBack {
    background-color: ${({ theme }) => theme.colors.neonOrange};
    padding: 0rem 2rem;
  }

  &.formExp__btn--add {
    width: 12rem;
    margin-top: 5rem;
  }

  &.formRev__btn--add {
    width: 12rem;
    margin-top: 15vh;
  }
`;
