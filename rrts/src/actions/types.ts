import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  // by default these are indexed by TS by default
  // fetchTodos = 0,
  // fetchCompleted = 1
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
