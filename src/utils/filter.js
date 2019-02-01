import { filterType } from '../containers/redux/constants/index';
export const getTodos = (todos, filter) => {
  switch (filter) {
    case filterType.SHOW_ALL:
      return todos;
    case filterType.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case filterType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};