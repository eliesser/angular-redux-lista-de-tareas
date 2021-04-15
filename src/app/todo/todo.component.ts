import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromTodo from './todo.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completado = !this.completado;

    const action = new fromTodo.ToggleAllTodoAction(this.completado);
    this.store.dispatch(action);
  }
}
