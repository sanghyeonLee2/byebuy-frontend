import { Get, Post } from '../configs/http';

export const Register = async (data) => await Post('/user/register', data);

export const Login = async (data) => await Post('/user/login ', data);

export const logout = async () => {
  try {
    // 로컬스토리지에서 token 제거
    localStorage.removeItem('token');

    // 로그아웃 API 호출 (옵션: 서버 세션 무효화)
    const response = await Post('/user/logout');
    return response;
  } catch (error) {
    console.error('Failed to logout', error);
    throw error;
  }
};
