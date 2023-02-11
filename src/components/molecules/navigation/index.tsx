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

const Navbar = () => {
  const { isDesktop } = useIsDesktop();

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
                    <StyledListItem>
                      <img src={icon} alt={icon} />
                      <p>{title}</p>
                    </StyledListItem>
                  </Link>
                );
              })}
            </StyledList>
            <StyledLogoutLink to={routes.login}>
              <StyledLogoutIcon alt="log out icon" />
              <Button>Log out</Button>
            </StyledLogoutLink>
          </StyledNav>
        </>
      ) : (
        <>
          <StyledLogoutLinkMobile to={routes.login}>
            <StyledLogoutIcon alt="log out icon" />
            <Button>Log out</Button>
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
