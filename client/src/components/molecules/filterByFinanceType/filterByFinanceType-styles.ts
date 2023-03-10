import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.midGreen};
  height: 2.7rem;
  max-width: 57rem;
  width: 100%;
  border-radius: 50px;

  ${media.mobile} {
    height: 2.8rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.colors.midGreen};
    border-radius: 50px;
    height: 2.5rem;
    max-width: 20rem;
    width: 100%;
    margin: 0rem 0.1rem;
    transition: background-color 0.2s;

    &.active {
      background-color: ${({ theme }) => theme.colors.lightest};
    }
  }
`;
