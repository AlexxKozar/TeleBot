import * as postActions from '../actions/posts';
import PostModel  from '../../models/post.model';

import { createSelector } from '@ngrx/store';

export interface PostsState {
  posts: PostModel[];
}

export const ininitalState: PostsState = {
    posts : []
}


export function reducer(state = ininitalState, action: postActions.Action) {
    switch (action.type) {

    case postActions.ADD_ONE:{
        return {
            posts: [...state.posts, action.payload]
        };
    }

    case postActions.ADD_MANY:{
        return {
            posts: [...action.payload['posts']]
        };
    }

    case postActions.ADD_ERROR:{
        return state;
    }

    default:
        return state;

    }
}


export const selectPostsState = (state:PostsState) => state.posts;