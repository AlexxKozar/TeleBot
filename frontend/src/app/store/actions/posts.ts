import { Action } from '@ngrx/store';
import PostModel from '../../models/post.model';

export const ADD_ONE = '[Posts] Add ONE';
export const ADD_MANY = '[Posts] ADD ERROR';
export const ADD_ERROR = '[Posts] ADD EROR';

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: PostModel) { }
}

export class AddMany implements Action {
    readonly type = ADD_MANY;
    constructor(public payload: PostModel[]) { }
}

export class AddError implements Action {
    readonly type = ADD_ERROR;
    constructor(public payload: object) { }
}

export type Action = AddOne;