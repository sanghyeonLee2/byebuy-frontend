import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/HomePage';
import Example from './pages/example/Example123';
import SignupPage from './pages/signup/signupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
