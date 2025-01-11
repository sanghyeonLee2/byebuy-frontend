import { Route, Routes, useLocation } from 'react-router-dom';
import HeaderNavigation from './components/HeaderNavigation';
import TabBar from './components/TapBar';
import AuthPage from './pages/auth/AuthPage';
import ChatPage from './pages/chat/ChatPage';
import ChatListPage from './pages/chatList/ChatListPage';
import Example from './pages/example/Example123';
import ExplorationPage from './pages/exploration/ExplorationPage';
import MatchingPage from './pages/matching/matching';
import { Register } from './pages/product/register/Register';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';

function App() {
  const location = useLocation();
  const isMatchingPage = location.pathname === '/matching';

  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatlist" element={<ChatListPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product/exploration" element={<ExplorationPage />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
      {!isMatchingPage && <TabBar />}
    </>
  );
}

export default App;
