import { ToggleButtonsType, View } from "../../lib/types";

const ToggleButtons = ({
  onChangeActiveView,
  activeView,
}: ToggleButtonsType) => {
  //Sets the style of the active button depending on the active view prop
  const todoActiveStyle = activeView === View.TODO && "bg-none bg-gray-400";
  const categoryActiveStyle =
    activeView === View.CATEGORY && "bg-none bg-gray-400";
  return (
    <div className="flex justify-center">
      <button
        onClick={() => onChangeActiveView(View.TODO)}
        className={`toggle-button text-white border-r rounded-l-md border-r-gray-500 ${todoActiveStyle}`}
      >
        Todo
      </button>
      <button
        onClick={() => onChangeActiveView(View.CATEGORY)}
        className={`toggle-button text-white rounded-r-md ${categoryActiveStyle}`}
      >
        Category
      </button>
    </div>
  );
};

export default ToggleButtons;
