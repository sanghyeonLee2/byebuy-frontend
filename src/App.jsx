import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Example from './pages/example/Example123';
import Home from './pages/home/HomePage';
import { Register } from './pages/product/register/Register';

import SigninPage from './pages/signin/SigninPage';
import AuthPage from './pages/auth/AuthPage';
import SignupPage from './pages/signup/SignupPage';
function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
