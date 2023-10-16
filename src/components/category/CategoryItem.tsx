import CategoryTodoList from "./CategoryTodoList";
import ActionIcons from "../ui/ActionIcons";
import { ACTION_TYPE, CategoryItemType } from "../../lib/types";
import { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { toast } from "react-toastify";

const CategoryItem = ({ dispatch, id, value }: CategoryItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const { getCategoryTodoNumber } = useTodoCategory();

  const handleDeleteCategory = () => {
    dispatch({ type: ACTION_TYPE.DELETE_CATEGORY, payload: id });
  };

  const handleCopyCategory = async () => {
    try {
      // Using navigator.clipboard to copy the todo item text
      await navigator.clipboard.writeText(value);
      // Display a success message using the toast library
      toast("Category copied!");
    } catch (err) {
      // Display an error alert if copying fails
      alert("Failed to copy text: " + err);
    }
  };

  return (
    <li>
      <div
        onClick={handleOpenAccordion}
        className={`bg-todo-item select-none cursor-pointer ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } py-4 px-8 flex gap-4 justify-between hover:bg-none hover:bg-yellow-200`}
      >
        <p>{value}</p>
        <span>{getCategoryTodoNumber(id)}</span>
        <ActionIcons
          onDelete={handleDeleteCategory}
          onCopy={handleCopyCategory}
          className="flex items-center gap-4 text-xl sm:gap-8"
        />
      </div>
      {isOpen && <CategoryTodoList id={id} />}
    </li>
  );
};

export default CategoryItem;
