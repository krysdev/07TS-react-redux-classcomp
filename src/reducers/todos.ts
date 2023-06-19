import {
  Todo, // interface is in 'actions/todos.ts'
  Action, // alias is in 'actions/types.ts'
  ActionTypes, // enum is in 'actions/types.ts'
} from '../actions'; // 'actions/index.ts' is a central export point

export const todosReducer = (state: Todo[] = [], action: Action) => {

  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state;
  }
};
