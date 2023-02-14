import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledTotalBalance = styled.div`
  background-color: ${({ theme }) => theme.colors.lightest};
  width: 95%;
  max-width: 57rem;
  height: 22vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightGreen};
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
