import styled from 'styled-components';
import { Form } from 'formik';
import { media } from '../../globalStyles/mediaQueries';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    margin-left: 7vw;
  }

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
`;
