
import { Link } from 'react-router-dom';
import { NavStyled } from './NavStyles'

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <i className={`fas fa-home-alt nav-logo-icon home-icon`}></i>
      </Link>

      <div className="nav-right">
        <Link to="/about" className={`nav-logo-icon`}>
          About
        </Link>

        <Link to="/github-main" className={`nav-logo-icon`}>
          Github
        </Link>
      </div>
    </NavStyled>
  );
};

export default Nav;
