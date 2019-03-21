import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';

import * as postsReducer from './posts';


export interface State {
  postsPage: postsReducer.PostsState;
}

export const reducers: ActionReducerMap<State> = {
  postsPage: postsReducer.reducer
};


export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
    return (state: State, action: any): State => {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }


export const metaReducers: MetaReducer<State>[] = [logger];


// Selectors

export const selectPostsPage = createFeatureSelector<State, postsReducer.PostsState>('postsPage');


export const selectPosts = createSelector(
    selectPostsPage,
    postsReducer.selectPostsState
);
