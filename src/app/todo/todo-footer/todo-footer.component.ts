import { AppState } from 'src/app/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;

  filtrosValidos: fromFiltro.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes',
  ];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFilterAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter((todo) => !todo.completado).length;
  }

  borrarCompletados() {
    const action = new fromTodo.BorrarCompletadosTodoAction();
    this.store.dispatch(action);
  }
}
