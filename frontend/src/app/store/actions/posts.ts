import { Action } from '@ngrx/store';
import PostModel from '../../models/post.model';
import { Observable } from 'rxjs';

export const ADD_ONE = '[Posts] Add ONE';
export const ADD_ONE_ASYNC = '[Posts] Add ONE ASYNC';
export const ADD_MANY = '[Posts] ADD MANY';
export const ADD_MANY_ASYNC = '[Posts] ADD MANY ASYNC';
export const ADD_ERROR = '[Posts] ADD EROR';

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: PostModel) { }
}

export class AddOneAsync implements Action {
    readonly type = ADD_ONE_ASYNC;
    constructor(public payload: Observable<PostModel>) { }
}

export class AddMany implements Action {
    readonly type = ADD_MANY;
    constructor(public payload: PostModel[]) { }
}

export class AddManyAsync implements Action {
    readonly type = ADD_MANY_ASYNC;
    constructor(public payload: Observable<PostModel[]>) { }
}

export class AddError implements Action {
    readonly type = ADD_ERROR;
    constructor(public payload: object) { }
}

export type Action = AddOne;