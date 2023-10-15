import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryTodoList from "./CategoryTodoList";

type Props = {};

const CategoryItem = (props: Props) => {
  return (
    <li>
      <div className="bg-todo-item rounded-lg py-4 px-8 flex gap-4 justify-between">
        <p>Grocery</p>
        <span>2 todos</span>
        <div className="flex items-center gap-4 text-xl sm:gap-8">
          <FontAwesomeIcon role="button" icon={faTrash} />
          <FontAwesomeIcon role="button" icon={faCopy} />
        </div>
      </div>
        <CategoryTodoList />
    </li>
  );
};

export default CategoryItem;
