import styled from 'styled-components';
import { Form } from 'formik';
import { media } from '../../globalStyles/mediaQueries';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    align-self: flex-start;
    margin: 0rem 0rem 4rem 7vw;
  }

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
`;
