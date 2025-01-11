import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import TabBar from './components/TapBar';
import AuthPage from './pages/auth/AuthPage';
import ChatPage from './pages/chat/ChatPage';
import ChatListPage from './pages/chatList/ChatListPage';
import Example from './pages/example/Example123';
import ExplorationPage from './pages/exploration/ExplorationPage';
import Home from './pages/home/HomePage';
import MatchingPage from './pages/matching/matching';
import { Register } from './pages/product/register/Register';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';

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
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/exploration" element={<ExplorationPage />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
      <TabBar />
    </BrowserRouter>
  );
}

export default App;
