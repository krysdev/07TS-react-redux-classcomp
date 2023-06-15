import axios from 'axios';
import { Dispatch } from 'redux'; // type definition
import { ActionTypes } from './types'; // enum

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // response.data is an array of Todo objects (see the interface)
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.fetchTodos, // taken from the enum object
      payload: response.data
    });
  };
};
