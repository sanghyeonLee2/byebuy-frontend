import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/HomePage';
import Example from './pages/example/Example123';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/example">예제</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
