import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// this interface describes the entire state inside the redux store
// state { todos: [Todo, Todo, Todo]}
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  // counter: () => 1, // dummy

  // TS checks if the function 'todosReducer' returns a value of type 'Todo[]'
  todos: todosReducer, // todos.ts
});
