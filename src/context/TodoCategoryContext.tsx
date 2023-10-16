import React, { createContext, useContext, useReducer } from "react";
import {
  ACTION_TYPE,
  ChildrenProps,
  TodoActionType,
  TodoStateType,
} from "../lib/types";

//Initial State of the todo reducer
const initialState: TodoStateType = {
  todo: [
    {
      id: 1,
      value: "Buy vinegar at the shop",
      categoryId: 1,
      isChecked: false,
    },
    {
      id: 2,
      value: "Take my dog for a walk",
      categoryId: 1,
      isChecked: false,
    },
    {
      id: 3,
      value: "Take coffee from office",
      categoryId: 2,
      isChecked: false,
    },
  ],
  category: [
    {
      id: 1,
      value: "Groceries",
    },
    {
      id: 2,
      value: "Work",
    },
    {
      id: 3,
      value: "Priority",
    },
  ],
};

//Todo reducer function
const todoCategoryReducer = (state: TodoStateType, action: TodoActionType): any => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return console.log("Added todo");
    //   return [...state, action.payload];
    case "UPDATE_TODO":
      // Implement your logic to update a todo item here
      return state;
    case ACTION_TYPE.DELETE_TODO:
      // Logic to delete a todo
      return {...state, todo: state.todo.filter((todo) => todo.id !== action.payload)}
    case ACTION_TYPE.ADD_CATEGORY:
      return state.category.concat(action.payload)
    default:
      return state;
  }
};

//Todo context
const TodoCategoryContext = createContext<
  { state: TodoStateType; dispatch: React.Dispatch<TodoActionType> } | undefined
>(undefined);

//Todo provider
export const TodoProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(todoCategoryReducer, initialState);

  return (
    <TodoCategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoCategoryContext.Provider>
  );
};

//Reusable function to get the value of todo context
export const useTodoCategory = () => {
  const context = useContext(TodoCategoryContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
