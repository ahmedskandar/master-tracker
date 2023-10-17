import CategoryItem from "./CategoryItem";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ListType } from "../../lib/types";
import { getFilteredCategory } from "../../data/constants";

const CategoryList = ({ searchInput }: ListType) => {
  const { state, dispatch } = useTodoCategory();

  const filteredCategory = getFilteredCategory(searchInput, state.category);

  return (
    <>
      {Object.keys(filteredCategory).length === 0 && (
        <p className="text-center mt-14 text-white">No category found</p>
      )}
      {Object.keys(filteredCategory).length !== 0 && (
        <ul className="mt-14 hide-scroll flex flex-col gap-5 max-h-60 overflow-y-scroll border-r pr-2">
          {filteredCategory.map((categoryItem, index) => (
            <CategoryItem
              index={index}
              value={categoryItem.value}
              key={categoryItem.id}
              dispatch={dispatch}
              id={categoryItem.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryList;
