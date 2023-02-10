import {
  StyledHeaderIcon,
  StyledBg,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLogoutLink,
  StyledLogoutIcon
} from './navigation-styled';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { sidebarData } from '../../../helpers/sidebar';

const Navbar = () => {
  return (
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
          <button>Log out</button>
        </StyledLogoutLink>
      </StyledNav>
    </>
  );
};

export default Navbar;
