import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neonOrange};
  border-radius: 10px;
  padding-left: 1rem;
  margin-top: 5rem;
  outline: none;

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.neonOrange};
  }

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    font-size: 1.6rem;
  }

  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 16 */
    font-size: 1.6rem;
  }

  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    font-size: 1.6rem;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    font-size: 1.6rem;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 45rem;
`;
