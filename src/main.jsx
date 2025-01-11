import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';

const GlobalStyleWrapper = () => {
  const location = useLocation();
  const isMatchingPage = location.pathname === '/matching';

  return <GlobalStyle isMatchingPage={isMatchingPage} />;
};

const Root = () => {
  return (
    <BrowserRouter>
      <GlobalStyleWrapper />
      <App />
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
