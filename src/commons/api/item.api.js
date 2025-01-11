import { Get, Post } from '../configs/http';

export const getItem = async () => await Get('/item');

export const postItem = async (data) => await Post('/item', data);
