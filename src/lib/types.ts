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