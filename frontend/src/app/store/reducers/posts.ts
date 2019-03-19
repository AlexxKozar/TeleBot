import * as postAction from '../actions/posts';
import PostModel  from '../../models/post.model';

export interface State {
  ids: number[];
  posts: PostModel[];
}

export const ininitalState: State = {
    ids: [1],
    posts : [{
        id: 1,
        text: '123',
        date: '123',
        isPublished: false
    }]
}


export function reducer(state = ininitalState, action: postAction.Action) {
    switch (action.type) {

    case postAction.ADD_ONE:
        return state;

    default:
        return state;

    }
}


export const getIds = (state:State) => state.ids;
export const getPosts = (state:State) => state.posts;