
type Props = {}

const TodoForm = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-5 mb-5 md:basis-11/12 md:mb-0 md:flex">
      <input
        type="text"
        className="pl-4 col-span-2 w-full rounded-md h-12 md:rounded-r-none md:rounded-l-md"
        placeholder="Enter a todo..."
      />
      <select className="h-12 bg-white/50 px-2 rounded-l-md md:rounded-none">
        <option value="">Category</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <button className="add-button">ADD</button>
    </div>
  );
}

export default TodoForm