import { ToggleButtonsType, VIEW } from "../../lib/types";

const ToggleButtons = ({
  onChangeActiveView,
  activeView,
}: ToggleButtonsType) => {
  //Sets the style of the active button depending on the active view prop
  const todoActiveStyle =
    activeView === VIEW.TODO ? "bg-none bg-gray-400 text-black" : "text-white";
  const categoryActiveStyle =
    activeView === VIEW.CATEGORY
      ? "bg-none bg-gray-400 text-black"
      : "text-white";
  return (
    <div className="flex justify-center">
      <button
      aria-label="Toggle todo"
        onClick={() => onChangeActiveView(VIEW.TODO)}
        className={`toggle-button border-r rounded-l-md border-r-gray-500 ${todoActiveStyle}`}
      >
        Todo
      </button>
      <button
      aria-label="Toggle category"
        onClick={() => onChangeActiveView(VIEW.CATEGORY)}
        className={`toggle-button rounded-r-md ${categoryActiveStyle}`}
      >
        Category
      </button>
    </div>
  );
};

export default ToggleButtons;
