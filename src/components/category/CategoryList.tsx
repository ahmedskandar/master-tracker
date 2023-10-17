import CategoryItem from "./CategoryItem";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ListType } from "../../lib/types";
import { getFilteredCategory } from "../../data/constants";

const CategoryList = ({ searchInput }: ListType) => {

  const { state, dispatch } = useTodoCategory();

  const filteredCategory = getFilteredCategory(searchInput, state.category);

  return (
    <ul className="mt-14 hide-scroll flex flex-col gap-5 max-h-48 overflow-y-scroll border-r pr-2">
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
  );
};

export default CategoryList;

// import CategoryItem from "./CategoryItem";
// import { useTodoCategory } from "../../context/TodoCategoryContext";

// const CategoryList = () => {
//   // Access state and dispatch function from the TodoContext
//   const { state, dispatch } = useTodoCategory();
//   return (
//     <ul className="mt-14 hide-scroll flex flex-col gap-5 h-48 overflow-y-scroll border-r pr-2">
//       {state.category.map((categoryItem) => (
//         <CategoryItem
//           key={categoryItem.id}
//           dispatch={dispatch}
//           todoState={state.todo}
//           {...categoryItem}
//         />
//       ))}
//     </ul>
//   );
// };

// export default CategoryList;
