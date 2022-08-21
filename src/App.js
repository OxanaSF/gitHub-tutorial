import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Nav from './components/Nav/Nav';
import Pages from './pages/Pages';

function App() {
  return (
    <main>
      <GlobalStyles />
      <BrowserRouter>
        <Nav />

        <Pages />
      </BrowserRouter>
    </main>
  );
}

export default App;
