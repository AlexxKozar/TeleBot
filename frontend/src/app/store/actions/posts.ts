import { Action } from '@ngrx/store';
import PostModel from '../../models/post.model';

export const ADD_ONE = '[Posts] Add One';

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: PostModel) { }
}

export type Action = AddOne;