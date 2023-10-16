import { TodoItemType } from "../../lib/types";
import ActionIcons from "../ui/ActionIcons";

const TodoItem = (props: TodoItemType) => {
  const {value, categoryId, id, isChecked} = props
  return (
    <li className="bg-todo-item rounded-lg py-4 px-8 flex gap-4 justify-between">
      <div className="flex gap-5">
        <input type="checkbox" />
        <p>{value}</p>
      </div>
      <p>
        <span className="font-bold">Category:</span> Priority
      </p>
      <ActionIcons className="flex items-center gap-4 text-xl sm:gap-8" />
    </li>
  );
};

export default TodoItem;
