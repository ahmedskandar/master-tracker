import React, { createContext, useContext, useReducer } from "react";
import { ChildrenProps, TodoActionType, TodoStateType } from "../lib/types";

const initialState: TodoStateType = [
  {
    id: 1,
    value: "Buy vinegar at the shop",
    categoryId: 1,
    isChecked: false,
  },
  {
    id: 2,
    value: "Take my dog for a walk",
    categoryId: 2,
    isChecked: false,
  },
];

const todoReducer = (
  state: TodoStateType,
  action: TodoActionType
): any => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      // Implement your logic to update a todo item here
      return state;
    case "DELETE_TODO":
      // Implement your logic to delete a todo item here
      return state;
    default:
      return state;
  }
};

const TodoContext = createContext<
  { state: TodoStateType; dispatch: React.Dispatch<TodoActionType> } | undefined
>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
