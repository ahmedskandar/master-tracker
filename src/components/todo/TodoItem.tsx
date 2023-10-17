import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ACTION_TYPE, TodoItemType } from "../../lib/types";
import ActionIcons from "../ui/ActionIcons";
import { toast } from "react-toastify";

const TodoItem = (props: TodoItemType) => {
  const { value, categoryId, id, isChecked, dispatch, index } = props;

  const { getCategoryName } = useTodoCategory();

  const handleDeleteTodo = () => {
    dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: id });
    toast("Todo deleted!");
  };

  const handleCopyTodo = async () => {
    try {
      // Using navigator.clipboard to copy the todo item text
      await navigator.clipboard.writeText(value);
      // Display a success message using the toast library
      toast("Todo copied!");
    } catch (err) {
      // Display an error alert if copying fails
      toast("Failed to copy text: " + err);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_CHECK, payload: id });
  };

  const category = getCategoryName(categoryId);
  return (
    <li
      className={`bg-todo-item ${
        isChecked && "line-through bg-none border"
      } rounded-lg py-4 px-8 grid grid-cols-3 gap-4 justify-between`}
    >
      <div className="flex col-span-3 gap-5 md:col-span-1">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <p>
          {index + 1}. {value}
        </p>
      </div>
      <p className="text-right">
        <span className="font-bold">Category:</span> <span>{category}</span>
      </p>
      <ActionIcons
        onDelete={handleDeleteTodo}
        onCopy={handleCopyTodo}
        className="flex items-center justify-end gap-4 text-xl sm:gap-8"
      />
    </li>
  );
};

export default TodoItem;
