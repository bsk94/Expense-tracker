import {
  StyledHeaderIcon,
  StyledBg,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLogoutLink,
  StyledLogoutIcon,
  StyledLogoutLinkMobile,
  StyledLinkMobile
} from './navigation-styled';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { sidebarData } from '../../../helpers/sidebar';
import Button from '../../atoms/button';
import { useIsDesktop } from '../../../shared/hooks/isDesktop';
import { useLocation } from 'react-router-dom';
import { removeTokens } from '../../../utils/auth';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../features/authSlice';

const Navbar = () => {
  const { isDesktop } = useIsDesktop();
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    removeTokens();
    dispatch(setAuth(false));
  };

  return (
    <>
      {isDesktop ? (
        <>
          <StyledBg>
            <StyledHeaderIcon alt="piggy bank icon" />
            <h1>Budget app</h1>
          </StyledBg>
          <StyledNav>
            <StyledList>
              {sidebarData.map(({ icon, title, link }) => {
                return (
                  <Link to={link} key={title}>
                    <StyledListItem className={location.pathname === link ? 'active' : ''}>
                      <img src={icon} alt={icon} />
                      <p>{title}</p>
                    </StyledListItem>
                  </Link>
                );
              })}
            </StyledList>
            <StyledLogoutLink to={routes.login}>
              <StyledLogoutIcon alt="log out icon" />
              <Button onClick={logout}>Log out</Button>
            </StyledLogoutLink>
          </StyledNav>
        </>
      ) : (
        <>
          <StyledLogoutLinkMobile to={routes.login}>
            <StyledLogoutIcon alt="log out icon" />
            <Button onClick={logout}>Log out</Button>
          </StyledLogoutLinkMobile>
          <StyledNav>
            <StyledList>
              {sidebarData.map(({ icon, title, link }) => {
                return (
                  <StyledLinkMobile to={link} key={title}>
                    <img src={icon} alt={icon} />
                    <p>{title}</p>
                  </StyledLinkMobile>
                );
              })}
            </StyledList>
          </StyledNav>
        </>
      )}
    </>
  );
};

export default Navbar;
