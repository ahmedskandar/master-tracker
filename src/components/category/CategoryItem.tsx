import CategoryTodoList from "./CategoryTodoList";
import ActionIcons from "../ui/ActionIcons";

type Props = {};

const CategoryItem = (props: Props) => {
  return (
    <li>
      <div className="bg-todo-item rounded-lg py-4 px-8 flex gap-4 justify-between">
        <p>Grocery</p>
        <span>2 todos</span>
        <ActionIcons className="flex items-center gap-4 text-xl sm:gap-8" />
      </div>
      <CategoryTodoList />
    </li>
  );
};

export default CategoryItem;
