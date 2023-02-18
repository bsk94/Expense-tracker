import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledContainer = styled.div`
  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
    height: 100%;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFinanceListItem = styled.li<{ showEditDelete?: boolean }>`
  background-color: ${({ theme }) => theme.colors.lightest};
  display: flex;
  justify-content: space-between;
  height: 5.5rem;
  margin: 1rem 0rem;
  width: 100%;
  transition: transform 0.15s ease;

  ${({ showEditDelete }) =>
    showEditDelete &&
    css`
      transform: translateX(-3em);
    `};
`;

export const StyledFinanceListItemDesktop = styled(StyledFinanceListItem)`
  max-width: 60rem;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const StyledEditDeleteDesktop = styled.div`
  background-color: ${({ theme }) => theme.colors.midGreen};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  width: 6rem;

  img {
    height: 2rem;
  }
`;

export const StyledEditDelete = styled.div`
  background-color: ${({ theme }) => theme.colors.midGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3em;

  img {
    height: 1.8rem;
  }
`;

export const StyledNameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
  white-space: nowrap;
`;

export const StyledAmountEditDelContainer = styled.div`
  display: flex;
  justify-content: space-around;

  span {
    white-space: nowrap;
    margin: 0.5rem 1.5rem 0rem 0rem;
  }
`;

export const StyledLeftSideDataContainer = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;
