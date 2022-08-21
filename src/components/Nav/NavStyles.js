import styled from 'styled-components';


export const NavStyled = styled.nav`
margin: 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  .home-icon {
  }

  .nav-logo-icon {
    color: var(--primary-blue);
  }

  .nav-logo-name {
    color: var(--primary-blue);
  }
`;
