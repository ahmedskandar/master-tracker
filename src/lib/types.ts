//Sets the children prop type
export type ChildrenProps = {
  children: React.ReactNode;
};

export enum VIEW {
  TODO = "Todo",
  CATEGORY = "Category",
}

export type ToggleButtonsType = {
  activeView: VIEW;
  onChangeActiveView: (view: VIEW) => void;
};

export type TodoType = {
  id: number;
  value: string;
  categoryId: number;
  isChecked: boolean;
}[];

export type CategoryType = {
  id: number;
  value: string;
}[];

export type TodoCategoryStateType = {
  todo: {
    id: number;
    value: string;
    categoryId: number;
    isChecked: boolean;
  }[];
  category: {
    id: number;
    value: string;
  }[];
};

export type TodoItemType = {
  id: number;
  value: string;
  categoryId: number;
  isChecked: boolean;
  dispatch: React.Dispatch<TodoActionType>;
  index: number
};

export type TodoActionType = {
  type: string;
  payload?: any;
};

// export type CategoryItemType = {
//   id: number;
//   value: string;
//   dispatch: React.Dispatch<TodoActionType>;
//   todoState: {
//     id: number;
//     value: string;
//     categoryId: number;
//     isChecked: boolean;
//   }[];
// };

export type CategoryItemType = {
  id: number;
  value: string;
  dispatch: React.Dispatch<TodoActionType>;
  index: number
};

export type ActionIconsType = {
  className: string;
  onDelete?: () => void; //These must have optional symbol otherwise error, will figure out why during my free time
  onCopy?: () => void;
};

export enum ACTION_TYPE {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  ADD_CATEGORY = "ADD_CATEGORY",
  DELETE_CATEGORY = "DELETE_CATEGORY",
  TOGGLE_CHECK = "TOGGLE_CHECK",
}

export type ToasterType = {
  message: string;
  onClose: () => void;
};

export type CategoryTodoListType = {
  todoState: {
    id: number;
    value: string;
    categoryId: number;
    isChecked: boolean;
  }[];
};

export type CategoryTodoItemType = {
  id: number;
  value: string;
  categoryId: number;
  isChecked: boolean;
  index?: number
};

export type SearchType = {
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ListType = {
  searchInput: string
}