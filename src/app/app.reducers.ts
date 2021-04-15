import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todo/models/todo.model';

import * as fromTodo from './todo/todo.reducer';

export interface AppState {
  todos: Todo[];
  filtro: string;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: String,
};
