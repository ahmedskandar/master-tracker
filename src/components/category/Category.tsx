import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";
import Search from "../ui/Search";
import { useState } from "react";

const Category = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:gap-6 md:justify-between">
        <CategoryForm />
        <Search onSearchInputChange={handleSearchInputChange} />
      </div>
      <CategoryList searchInput = {searchInput}/>
    </div>
  );
}

export default Category