import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neonOrange};
  border-radius: 10px;
  padding: 1rem;
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
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 1.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 6.5rem;
  transition: 0.2s ease all;

  ${StyledInput}:not(:placeholder-shown)~  & {
    top: 4rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 0rem 0.4rem;
    margin: 0rem 1rem;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.neonOrange};
    @media screen and (max-width: 600px) {
      background: rgb(255, 255, 255);
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(249, 255, 247, 1) 50%);
    }
  }
  ${StyledInput}:focus ~  & {
    top: 4rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 0rem 0.4rem;
    margin: 0rem 1rem;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.neonOrange};
    @media screen and (max-width: 600px) {
      background: rgb(255, 255, 255);
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(249, 255, 247, 1) 50%);
    }
  }
`;
