import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  ACTION_TYPE,
  CategoryTodoItemType,
  ChildrenProps,
  TodoActionType,
  TodoCategoryStateType,
} from "../lib/types";
import { LOCAL_STORAGE_KEY } from "../data/constants";

//Initial State of the todo reducer
const initialState = {
  todo: [],
  category: [],
};

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
    case ACTION_TYPE.DELETE_CATEGORY:
      return {
        todo: state.todo.filter((todo) => todo.categoryId !== action.payload),
        category: state.category.filter(
          (category) => category.id !== action.payload
        ),
      };
    case ACTION_TYPE.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case ACTION_TYPE.ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case ACTION_TYPE.TOGGLE_CHECK:
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isChecked: !todo.isChecked }
            : todo
        ),
      };
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
      getCategoryTodoNumber: (id: number) => number;
      getCategoryTodoItems: (id: number) => CategoryTodoItemType[];
    }
  | undefined
>(undefined);

//Todo provider
export const TodoProvider = ({ children }: ChildrenProps) => {
  const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initialData = storedState ? JSON.parse(storedState) : initialState;
  const [state, dispatch] = useReducer(todoCategoryReducer, initialData);

  useEffect(() => {
    // Store the state in localStorage whenever it changes to persist in browser refresh
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  //Returns the todo items' properties
  const getCategoryTodoItems = (id: number) =>
    state.todo.filter((todo: any) => todo.categoryId === id);

  //Returns the number of todos in a category
  const getCategoryTodoNumber = (id: number) => getCategoryTodoItems(id).length;

  //Returns category name based on ID, since ID is used to uniquely reference each category
  const getCategoryName = (id: number) => {
    const category = state.category?.find(
      (category: any) => category.id === id
    );
    return category?.value; // Change "Default Value" to whatever default you want
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
