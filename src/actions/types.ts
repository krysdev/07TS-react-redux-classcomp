import { FetchTodosAction, DeleteTodoAction } from "./todos";


// This is ENUM for all redux action types used by dispatch (not TS types)

// TS assignes by default an incremental value to the key
// so 'fetchTodos = 0'
//     'someOther = 1'
// and to be fair this is sufficient for the redux to work, as it is unique enough to identify the action types

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}


// type alias to be used in all of the different reducers
export type Action = FetchTodosAction | DeleteTodoAction