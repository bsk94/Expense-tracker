import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

export const StyledInputs = styled.div`
  width: 70%;
  max-width: 45rem;
`;

export const StyledContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  background-color: ${({ theme }) => theme.colors.lightest};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    grid-row: 1 /4;
  }
`;

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.white};

  width: 85%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
`;

export const StyledRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neonOrange};
`;
