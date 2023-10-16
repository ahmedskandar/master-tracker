import React, { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ACTION_TYPE } from "../../lib/types";

const CategoryForm = () => {
  const { dispatch } = useTodoCategory();

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputData = {
      id: Math.random(),
      value: input,
    };

    dispatch({type: ACTION_TYPE.ADD_CATEGORY, payload: inputData})

    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-y-5 mb-5 md:basis-11/12 md:mb-0 md:flex"
    >
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        className="pl-4 col-span-2 w-full rounded-md h-12 md:rounded-r-none md:rounded-l-md"
        placeholder="Enter a category..."
      />
      <div className="flex justify-center col-span-2">
        <button
          type="submit"
          className="add-button rounded-md md:rounded-l-none"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
