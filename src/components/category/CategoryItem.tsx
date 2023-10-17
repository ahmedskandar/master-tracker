import CategoryTodoList from "./CategoryTodoList";
import ActionIcons from "../ui/ActionIcons";
import { ACTION_TYPE, CategoryItemType } from "../../lib/types";
import { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { toast } from "react-toastify";

const CategoryItem = ({ dispatch, id, value, index }: CategoryItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCategoryTodoNumber } = useTodoCategory();

  //Handles clicking of this component to display todos inside the category
  const handleOpenAccordion = () => {
    if (todoNumber < 1) return;
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleDeleteCategory = () => {
    // Display a confirmation dialog if there is todos in the category to be deleted
    if (todoNumber > 0) {
      const userConfirmed = window.confirm(
        "Deleting a category deletes all the todos associated with it. Do you really wish to proceed?"
      );

      // Check if the user clicked "Yes"
      if (userConfirmed) {
        dispatch({ type: ACTION_TYPE.DELETE_CATEGORY, payload: id });
        toast("Category deleted");
      } else {
        return;
      }
    }
    //Delete category without displaying dialog
    else {
      dispatch({ type: ACTION_TYPE.DELETE_CATEGORY, payload: id });
      toast("Category deleted");
    }
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
  const todoNumber = getCategoryTodoNumber(id);
  return (
    <li>
      <div
        onClick={handleOpenAccordion}
        className={`bg-todo-item select-none cursor-pointer ${
          isOpen ? "rounded-t-lg bg-none bg-yellow-200" : "rounded-lg"
        } py-4 px-8 flex gap-4 justify-between hover:bg-none hover:bg-yellow-200`}
      >
        <p>
          {index + 1}. {value}
        </p>
        <span>
          <b>{todoNumber}</b> {todoNumber > 1 ? "todos" : "todo"}
        </span>
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
