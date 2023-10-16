import CategoryTodoList from "./CategoryTodoList";
import ActionIcons from "../ui/ActionIcons";
import { CategoryItemType } from "../../lib/types";
import { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";

const CategoryItem = ({dispatch, id, value}: CategoryItemType) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenAccordion = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  const {getCategoryTodoNumber} = useTodoCategory()
   return (
     <li>
       <div onClick={handleOpenAccordion} className={`bg-todo-item select-none cursor-pointer ${isOpen ? "rounded-t-lg" : "rounded-lg"} py-4 px-8 flex gap-4 justify-between hover:bg-none hover:bg-yellow-200`}>
         <p>{value}</p>
         <span>{getCategoryTodoNumber(id)}</span>
         <ActionIcons
           onCopyTodo={() => null}
           onDeleteTodo={() => null}
           className="flex items-center gap-4 text-xl sm:gap-8"
         />
       </div>
       {isOpen && <CategoryTodoList id={id}/>}
     </li>
   );
};

export default CategoryItem;
