import { Get, Post } from '../configs/http';

export const getExample = async () => await Get('/example');

export const postExample = async (data) => await Post('/example', data);

export const Register = async (data) => await Post('/user/register', data);

export const Login = async (data) => await Post('/user/login ', data);
