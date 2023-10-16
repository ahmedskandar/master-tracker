import { ToggleButtonsType, VIEW } from "../../lib/types";

const ToggleButtons = ({
  onChangeActiveView,
  activeView,
}: ToggleButtonsType) => {
  //Sets the style of the active button depending on the active view prop
  const todoActiveStyle = activeView === VIEW.TODO && "bg-none bg-gray-400";
  const categoryActiveStyle =
    activeView === VIEW.CATEGORY && "bg-none bg-gray-400";
  return (
    <div className="flex justify-center">
      <button
        onClick={() => onChangeActiveView(VIEW.TODO)}
        className={`toggle-button text-white border-r rounded-l-md border-r-gray-500 ${todoActiveStyle}`}
      >
        Todo
      </button>
      <button
        onClick={() => onChangeActiveView(VIEW.CATEGORY)}
        className={`toggle-button text-white rounded-r-md ${categoryActiveStyle}`}
      >
        Category
      </button>
    </div>
  );
};

export default ToggleButtons;
