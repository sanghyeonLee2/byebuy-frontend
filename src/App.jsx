import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Home from './pages/home/HomePage';
import Example from './pages/example/Example123';
import SignupPage from './pages/signup/signupPage';
import SigninPage from './pages/signin/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
