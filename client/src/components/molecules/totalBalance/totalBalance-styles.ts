import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledTotalBalance = styled.div`
  background-color: ${({ theme }) => theme.colors.lightest};
  width: 100%;
  max-width: 57rem;
  height: 22vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem;

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    margin: 2rem 0rem 5rem 0rem;
  }
  ${media.mobileS} {
    margin: 0rem 0rem 1rem 0rem;
  }

  span {
    font-size: 2rem;
    margin-left: 3rem;
    align-self: flex-start;
  }
`;

export const StyledTotalBalanceAmount = styled.div`
  font-size: 4.8rem;
  padding: 5%;
`;
