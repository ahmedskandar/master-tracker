import React from "react";

type Props = {};

const CategoryForm = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-5 mb-5 md:basis-11/12 md:mb-0 md:flex">
      <input
        type="text"
        className="pl-4 col-span-2 w-full rounded-md h-12 md:rounded-r-none md:rounded-l-md"
        placeholder="Enter a category..."
      />
      <div className="flex justify-center col-span-2">
        <button className="add-button rounded-md md:rounded-l-none">ADD</button>
      </div>
    </div>
  );
};

export default CategoryForm;
