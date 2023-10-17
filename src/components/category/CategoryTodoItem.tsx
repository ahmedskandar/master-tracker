import { CategoryTodoItemType } from "../../lib/types";

const CategoryTodoItem = ({
  value,
  index,
  isChecked,
}: CategoryTodoItemType) => {
  return (
    <li>
      <p className={`${isChecked && "line-through"}`}>
        {index !== undefined && index + 1}. {value}
      </p>
    </li>
  );
};

export default CategoryTodoItem;
