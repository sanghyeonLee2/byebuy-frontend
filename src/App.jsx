import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Example from './pages/example/Example123';
import { Register } from './pages/product/register/Register';
import SigninPage from './pages/signin/SigninPage';
import AuthPage from './pages/auth/AuthPage';
import SignupPage from './pages/signup/SignupPage';
import ExplorationPage from './pages/exploration/ExplorationPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product/exploration" element={<ExplorationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
