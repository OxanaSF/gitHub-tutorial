import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GitHubMain from './GitHubMain/GitHubMain';

import styled from 'styled-components';

const Pages = (props) => {
  return (
    <PagesStyled>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/github-main" element={<GitHubMain />}></Route>
    </Routes>
    </PagesStyled>
  );
};


const PagesStyled = styled.section`

`

export default Pages;
