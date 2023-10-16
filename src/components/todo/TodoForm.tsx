import { useState } from "react";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ACTION_TYPE } from "../../lib/types";

type Props = {}

const TodoForm = (props: Props) => {
  const {state, dispatch} = useTodoCategory()

  const [input, setInput] = useState("")
  const [categorySelect, setCategorySelect] = useState(1)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCategorySelect(+e.target.value)
  }

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputData = {
      id: Math.random(),
      value: input,
      categoryId: categorySelect,
      isChecked: false
    };

    dispatch({type: ACTION_TYPE.ADD_TODO, payload: inputData})

    setInput("")
    setCategorySelect(1)

  };

  return (
    <form onSubmit={handleAddTodo} className="grid grid-cols-2 gap-y-5 mb-5 md:basis-11/12 md:mb-0 md:flex">
      <input
      value={input}
        type="text"
        className="pl-4 col-span-2 w-full rounded-md h-12 md:rounded-r-none md:rounded-l-md"
        placeholder="Enter a todo..."
        onChange={handleInputChange}
      />
      <select onChange={handleCategoryChange} value={categorySelect} className="h-12 cursor-pointer bg-white/50 px-2 rounded-l-md md:rounded-none">
        <option value="">Category</option>
       {state.category.map(category => <option key={category.id} value={category.id}>{category.value}</option>)}
      </select>
      <button type="submit" className="add-button">ADD</button>
    </form>
  );
}

export default TodoForm