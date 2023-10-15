import TodoForm from "./TodoForm";

type Props = {};

const Todo = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:gap-6">
        <TodoForm />
        <input
          type="text"
          className="pl-4 rounded-md h-12"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Todo;
