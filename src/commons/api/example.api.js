import { Get, Post } from "../configs/http"

export const getExample = async () =>  await Get('/example')

export const postExample = async (data) => await Post('/example', data)
