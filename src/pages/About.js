import styled from "styled-components"

const About = () => {
  return (
    <AboutStyled>
        <h2>About</h2> 
    </AboutStyled>
  )
}




const AboutStyled = styled.section`
  height: 90vh;
  background-color: var(--primary-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-size: 5rem;
    color: var(--primary-light-pink);
  }
  
`

export default About