import ActionIcons from "../ui/ActionIcons";
type Props = {};

const CategoryTodoItem = (props: Props) => {
  return (
    <li className="flex justify-between">
      <p>Todo n</p>
      <ActionIcons  className="space-x-5"/>
    </li>
  );
};

export default CategoryTodoItem;
