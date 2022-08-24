import styled from 'styled-components';

export const SSHKeySetupStyled = styled.section`
  /* style for whole page first */
  margin-left: calc(var(--nav-width) + 1rem);
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    margin-top: 10rem;
  }

  code {
    background-color: var(--primary-light-pink);
  }
`;
