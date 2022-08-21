import styled from 'styled-components';

export const MainStyled = styled.main`
  font-size: 1rem;
  transition: 0.5s;

  .sidebar {
    position: fixed;
    top: 5rem;
    left: -30%;
    height: 100vh;
    width: var(--nav-width);
    background-color: var(--primary-blue);
    padding-top: 1rem;
    transition: 0.5s;
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
  }

  

  .nav-logo,
  .nav-link {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 2rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
  }

  .nav-logo {
    margin-bottom: 2rem;
  }

  .nav-logo-icon {
    font-size: 1.25rem;
    color: var(--primary-light-pink);
    cursor: pointer;
  }

  .nav-logo-name {
    font-weight: 700;
    color: var(--primary-light-pink);
  }

  .nav-link {
    position: relative;
    color: var(--primary-pink);
    transition: 0.5s;
    margin-bottom: 1.5rem;
  }

  .nav-link:hover {
    color: var(--primary-light-pink);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .active {
    color: var(--primary-light-pink);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 38px;
    width: 3px;
    background-color: var(--primary-light-pink);
    transition: 0.5s;
  }

  .show {
    left: 0;
    width: calc(var(--header-height) + 10rem);
  }

  .header-space-toggle {
    padding-left: calc(var(--nav-width) + 9.5rem);
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      left: 0;
      padding: 1rem 0 0 0;
    }
  }
`;

export const HeaderStyled = styled.header`
  position: fixed;
  top: 5rem;
  left: 0;
  height: var(--header-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-light-pink);
  padding: 0 1rem;
  transition: 0.5s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .header-toggle {
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--primary-blue);
  }

  @media screen and (min-width: 768px) {
    .header {
      height: calc(var(--header-height) + 1rem);
      padding-left: calc(var(--nav-width) + 2rem);
    }

    .header-space-toggle {
      padding-left: calc(var(--nav-width) + 9.5rem);
    }
  }
`;
