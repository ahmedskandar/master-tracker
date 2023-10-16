import CategoryItem from "./CategoryItem";
import { useTodoCategory } from "../../context/TodoCategoryContext";

const CategoryList = () => {
  // Access state and dispatch function from the TodoContext
  const { state, dispatch } = useTodoCategory();
  return (
    <ul className="mt-14 hide-scroll flex flex-col gap-5 h-48 overflow-y-scroll border-r pr-2">
      {state.category.map((categoryItem) => (
        <CategoryItem
          key={categoryItem.id}
          dispatch={dispatch}
          todoState={state.todo}
          {...categoryItem}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
