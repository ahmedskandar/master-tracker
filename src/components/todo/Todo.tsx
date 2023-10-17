import { useState } from "react";
import Search from "../ui/Search";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:gap-6 md:justify-between">
        <TodoForm />
        <Search onSearchInputChange={handleSearchInputChange} />
      </div>
      <TodoList searchInput={searchInput} />
    </div>
  );
};

export default Todo;
