//Sets the children prop type
export type ChildrenProps = {
  children: React.ReactNode;
};

export enum View {
  TODO = "Todo",
  CATEGORY = "Category",
}

export type ToggleButtonsType = {
  activeView: View;
  onChangeActiveView: (view: View) => void;
}

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
  type: string,
  payload: any
}

