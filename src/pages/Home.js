import styled from "styled-components"

const Home = () => {
  return (
    <HomeStyled>
      <h1>Home</h1>

    </HomeStyled>
  )
}


const HomeStyled = styled.section`
  height: 90vh;
  background-color: var(--primary-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: 7rem;
    color: var(--primary-light-pink);
  }
  
`

export default Home