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

export type TodoStateType = {
  id: number;
  value: string;
  categoryId: number;
  isChecked: boolean;
}[];

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

export type ActionIconsType = {
  className?: string;
  onDeleteTodo?: () => void;
  onCopyTodo?: () => void;
};

export enum ACTION_TYPE {
  // Add a new todo item
  ADD_TODO = "ADD_TODO",
  // Delete an existing todo item
  DELETE_TODO = "DELETE_TODO",
}

export type ToasterType = {
  message: string,
  onClose: () => void
}