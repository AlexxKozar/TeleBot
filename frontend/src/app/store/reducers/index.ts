import { 
    ActionReducerMap, 
    createSelector, 
    createFeatureSelector,
    ActionReducer, 
    MetaReducer 
} from '@ngrx/store';

import * as fromPosts from './posts';


export interface State {
    posts: fromPosts.State
}

export const reducers: ActionReducerMap<State> = {
    posts: fromPosts.reducer
};


export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
    return function (state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }


export const metaReducers: MetaReducer<State>[] = [logger];


// Selectors

export const getPostsState = createFeatureSelector<fromPosts.State>('posts');


export const getPosts = createSelector(
    getPostsState,
    fromPosts.getPosts
)