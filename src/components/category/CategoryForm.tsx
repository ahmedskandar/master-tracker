import React, { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ACTION_TYPE } from "../../lib/types";
import { toast } from "react-toastify";

const CategoryForm = () => {
  const { dispatch } = useTodoCategory();

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input)
      return toast("Please fill in the input field", { theme: "light" });

    const inputData = {
      id: Math.random(),
      value: input,
    };

    dispatch({ type: ACTION_TYPE.ADD_CATEGORY, payload: inputData });
    toast("Successfully added a category");
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-y-5 mb-5 md:basis-11/12 md:mb-0 md:flex"
    >
      <input
        value={input}
        maxLength={10}
        onChange={handleInputChange}
        type="text"
        className="pl-4 col-span-2 w-full rounded-md h-12 md:rounded-r-none md:rounded-l-md"
        placeholder="Enter a category..."
      />
      <div className="flex justify-center col-span-2">
        <button
          type="submit"
          aria-label="Add category"
          className="add-button rounded-md md:rounded-l-none"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
