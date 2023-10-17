import { CategoryType, TodoType } from "../lib/types";

//Returns filtered todo or category based on search input or return all data if search is falsy
export const getFilteredTodo = (searchInput: string, state: TodoType) =>
  searchInput
    ? state.filter((item) =>
        item.value.toLowerCase().includes(searchInput.toLowerCase())
      )
    : state;

export const getFilteredCategory = (searchInput: string, state: CategoryType) =>
  searchInput
    ? state.filter((item) =>
        item.value.toLowerCase().includes(searchInput.toLowerCase())
      )
    : state;

export const LOCAL_STORAGE_KEY = "TODO_CATEGORY";
