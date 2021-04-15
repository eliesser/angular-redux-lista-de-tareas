import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import * as fromFiltro from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }
}
