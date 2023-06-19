import axios from 'axios';
import { Dispatch } from 'redux'; // type definition
import { ActionTypes } from './types'; // enum

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// describes the action object in 'dispatch'
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

// const url = 'https://jsonplaceholder.typicode.com/todos';
const url = 'http://127.0.0.1:3005/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // response.data is an array of Todo objects (see the interface)
    const response = await axios.get<Todo[]>(url);

    dispatch <FetchTodosAction> ({
      type: ActionTypes.fetchTodos, // taken from the enum object
      payload: response.data,
    });
  };
};
