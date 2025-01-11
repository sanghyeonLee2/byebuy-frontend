import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import Example from './pages/example/Example123';
import Home from './pages/home/HomePage';
import { Register } from './pages/product/register/Register';
import ChatPage from './pages/chat/ChatPage';
import ChatListPage from './pages/chatList/ChatListPage';
import SigninPage from './pages/signin/SigninPage';
import AuthPage from './pages/auth/AuthPage';
import SignupPage from './pages/signup/SignupPage';
import ExplorationPage from './pages/exploration/ExplorationPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatlist" element={<ChatListPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/product/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/exploration" element={<ExplorationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
