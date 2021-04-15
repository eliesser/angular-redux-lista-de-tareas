import * as fromFiltros from './filter.actions';

const estadoInicial: fromFiltros.filtrosValidos = 'todos';

export function filtroReducer(
  state = estadoInicial,
  action: fromFiltros.acciones
): string {
  switch (action.type) {
    case fromFiltros.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
