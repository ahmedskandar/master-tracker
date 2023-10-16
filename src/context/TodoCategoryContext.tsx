import React, { createContext, useContext, useReducer } from "react";
import {
  ACTION_TYPE,
  ChildrenProps,
  TodoActionType,
  TodoCategoryStateType,
} from "../lib/types";

//Initial State of the todo reducer
const initialState: TodoCategoryStateType = {
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
// state.todo.filter((todo) => todo.categoryId === action.payload);
//Todo reducer function (only functions that modify state, pure reusable functions below)
const todoCategoryReducer = (
  state: TodoCategoryStateType,
  action: TodoActionType
): any => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "UPDATE_TODO":
      // Implement your logic to update a todo item here
      return state;
    case ACTION_TYPE.DELETE_TODO:
      // Logic to delete a todo
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case ACTION_TYPE.ADD_CATEGORY:
      return state.category.concat(action.payload);
    default:
      return state;
  }
};

//Todo context
const TodoCategoryContext = createContext<
  | {
      state: TodoCategoryStateType;
      dispatch: React.Dispatch<TodoActionType>;
      getCategoryName: (id: number) => string;
      getCategoryTodoNumber: (id: number) => any;
      getCategoryTodoItems: (id: number) => any;
    }
  | undefined
>(undefined);

//Todo provider
export const TodoProvider = ({ children }: ChildrenProps) => {

  const [state, dispatch] = useReducer(todoCategoryReducer, initialState);

  //Returns the todo items' properties
  const getCategoryTodoItems = (id: number) =>
    state.todo.filter((todo: any) => todo.categoryId === id);

  //Returns the number of todos in a category
  const getCategoryTodoNumber = (id: number) => getCategoryTodoItems(id).length;

  //Returns category name based on ID, since ID is used to uniquely reference each category
  const getCategoryName = (id: number) => {
    const category = state.category.find((category: any) => category.id === id);
    return category.value; // Change "Default Value" to whatever default you want
  };


  return (
    <TodoCategoryContext.Provider
      value={{
        state,
        dispatch,
        getCategoryName,
        getCategoryTodoNumber,
        getCategoryTodoItems,
      }}
    >
      {children}
    </TodoCategoryContext.Provider>
  );
};

//REUSABLE FUNCTIONS
export const useTodoCategory = () => {
  const context = useContext(TodoCategoryContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
// export const getCategoryTodoItems = (id: number) =>
//   initialState.todo.filter((todo) => todo.categoryId === id);

// export const getCategoryTodoNumber = (id: number) =>
//   getCategoryTodoItems(id).length;

// export const getCategoryName = (id: number) =>
//   initialState.category.map((category) => category.id === id && category);
