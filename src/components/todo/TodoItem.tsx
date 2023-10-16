import { ACTION_TYPE, TodoItemType } from "../../lib/types";
import ActionIcons from "../ui/ActionIcons";
import { toast } from "react-toastify";

// A functional component for rendering a single todo item
const TodoItem = (props: TodoItemType) => {
  // Destructure props to access relevant data
  const { value, categoryId, id, isChecked, dispatch } = props;

  // Event handler to delete the todo item
  const handleDeleteTodo = () => {
    dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: id });
  };

  // Event handler to copy the todo item's value to the clipboard
  const handleCopyTodo = async () => {
    try {
      // Using navigator.clipboard to copy the todo item text
      await navigator.clipboard.writeText(value);
      // Display a success message using the toast library
      toast("Todo copied!");
    } catch (err) {
      // Display an error alert if copying fails
      alert("Failed to copy text: " + err);
    }
  };
  return (
    <li className="bg-todo-item rounded-lg py-4 px-8 flex gap-4 justify-between">
      <div className="flex gap-5">
        <input type="checkbox" />
        <p>{value}</p>
      </div>
      <p>
        <span className="font-bold">Category:</span> Priority
      </p>
      <ActionIcons
        onDeleteTodo={handleDeleteTodo}
        onCopyTodo={handleCopyTodo}
        className="flex items-center gap-4 text-xl sm:gap-8"
      />
    </li>
  );
};

export default TodoItem;
