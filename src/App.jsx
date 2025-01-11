import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Example from './pages/example/Example123';
import Home from './pages/home/HomePage';
import { Register } from './pages/product/register/Register';
import SignupPage from './pages/signup/signupPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
