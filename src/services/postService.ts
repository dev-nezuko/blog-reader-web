import { AxiosResponse } from 'axios';
import { NewPostPayload } from 'types/newPostPayload';
import { PostType } from 'types/post';

import { baseService } from './baseService';

export const postApi = {
  posts: '/posts',
};

export function getPosts(authtoken: string): Promise<AxiosResponse<{ payload: PostType[] }>> {
  return baseService.get(postApi.posts, { headers: { authtoken } });
}

export function createPost(values: NewPostPayload): Promise<AxiosResponse<void>> {
  return baseService.post(postApi.posts, values);
}
