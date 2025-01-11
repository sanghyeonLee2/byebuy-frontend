import { Get, Post } from '../configs/http';

export const getItem = async (data) =>
  await Get(`/item?latitude=${data.latitude}&longitude=${data.longitude}&meters=${data.meters}`);
export const postItem = async (data) => await Post('/item', data);

export const getMyItem = async () => await Get('/item/my');
