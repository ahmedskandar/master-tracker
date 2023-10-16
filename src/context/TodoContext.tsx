import React, { createContext, useContext, useReducer } from "react";
import { ACTION_TYPE, ChildrenProps, TodoActionType, TodoStateType } from "../lib/types";

//Initial State of the todo reducer
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

//Todo reducer function
const todoReducer = (state: TodoStateType, action: TodoActionType): any => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return console.log("Added todo");
    //   return [...state, action.payload];
    case "UPDATE_TODO":
      // Implement your logic to update a todo item here
      return state;
    case ACTION_TYPE.DELETE_TODO:
      // Logic to delete a todo
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

//Todo context
const TodoContext = createContext<
  { state: TodoStateType; dispatch: React.Dispatch<TodoActionType> } | undefined
>(undefined);

//Todo provider
export const TodoProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

//Reusable function to get the value of todo context
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
