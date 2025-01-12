import { Post } from '../configs/http';

export const makeMatching = async (interestId) => await Post(`/interest/matching/${interestId}`);

export const getMatchedItemsInfo = async (interestId) => await Post(`/interest/matched/${interestId}`);
