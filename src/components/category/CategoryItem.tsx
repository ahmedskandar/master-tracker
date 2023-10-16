import CategoryTodoList from "./CategoryTodoList";
import ActionIcons from "../ui/ActionIcons";
import { CategoryItemType } from "../../lib/types";

const CategoryItem = ({dispatch, id, value, todoState}: CategoryItemType) => {
  const numberOfTodosInCategory = todoState.filter(todo=>todo.categoryId === id).length
  return (
    <li>
      <div className="bg-todo-item rounded-lg py-4 px-8 flex gap-4 justify-between">
        <p>{value}</p>
        <span>{numberOfTodosInCategory}</span>
        <ActionIcons onCopyTodo={() => null} onDeleteTodo={() => null} className="flex items-center gap-4 text-xl sm:gap-8" />
      </div>
      <CategoryTodoList />
    </li>
  );
};

export default CategoryItem;
