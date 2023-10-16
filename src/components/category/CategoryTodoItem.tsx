import { CategoryTodoItemType } from "../../lib/types";
import ActionIcons from "../ui/ActionIcons";

const CategoryTodoItem = ({value}: CategoryTodoItemType) => {
  return (
    <li className="flex justify-between">
      <p>{value}</p>
      <ActionIcons  className="space-x-5"/>
    </li>
  );
};

export default CategoryTodoItem;
