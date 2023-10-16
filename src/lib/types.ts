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
  
};

export type ActionIconsType = {
  className?: string;
  onDeleteTodo?: () => void;
  onCopyTodo?: () => void;
};

export enum ACTION_TYPE {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  ADD_CATEGORY = "ADD_CATEGORY",
  DELETE_CATEGORY = "DELETE_CATEGORY",
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
};
