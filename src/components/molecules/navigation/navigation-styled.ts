import styled from 'styled-components';
import piggybank from '../../../assets/icons/piggy-bank.svg';
import bgNav from '../../../assets/backgrounds/bg-abstract.png';
import logout from '../../../assets/icons/logout-rounded.svg';
import { Link } from 'react-router-dom';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledHeaderIcon = styled.img.attrs({
  src: `${piggybank}`
})``;

export const StyledBg = styled.header`
  background-image: url(${bgNav});
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    margin-left: 1.5rem;
  }
`;

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.mobile} {
    grid-row: 3/4;
    display: flex;
    justify-content: center;
  }
`;

export const StyledList = styled.ul`
  padding-top: 7vh;
  ${media.mobile} {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding-top: 0;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  margin: 1.5rem 0rem;
  img {
    padding: 0.8rem 0rem 0.8rem 1.5rem;
  }
  p {
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.black};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border: 0px solid;
    border-radius: 8px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border: 0px solid;
    border-radius: 8px;
  }
`;

export const StyledLinkMobile = styled(Link)`
  display: flex;
  flex-direction: column;
  img {
    height: 5rem;
    ${media.mobileS} {
      height: 4rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    margin-top: 0.2rem;
    ${media.mobileS} {
      font-size: 1.5rem;
    }
  }
`;

export const StyledLogoutLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightest};
  border: 0px solid;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0rem 4rem 5vh 4rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
  img {
    margin-right: 0.5rem;
  }
  button {
    border: 0;
    background: none;
    font-size: 2.3rem;
  }
`;

export const StyledLogoutIcon = styled.img.attrs({
  src: `${logout}`
})``;

export const StyledLogoutLinkMobile = styled(Link)`
  background-color: ${({ theme }) => theme.colors.lightest};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2rem;
  img {
    height: 3rem;
    margin-right: 0.5rem;
  }
  button {
    border: 0;
    background: none;
    font-size: 2.1rem;
    margin-top: 0.5rem;
  }
`;
