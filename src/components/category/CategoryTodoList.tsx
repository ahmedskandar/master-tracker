import { useTodoCategory } from "../../context/TodoCategoryContext";
import CategoryTodoItem from "./CategoryTodoItem";

const CategoryTodoList = ({id}: { id: number }) => {
    const { getCategoryTodoItems } = useTodoCategory();

  const todoItems = getCategoryTodoItems(id)
  return (
    <ul className="py-2 px-8 bg-white flex flex-col gap-3">
      {todoItems.map((todo, index: number) => (
        <CategoryTodoItem index={index} key={index} {...todo} />
      ))}
    </ul>
  );
};

export default CategoryTodoList;
