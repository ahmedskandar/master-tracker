import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type Props = {};

const Todo = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:gap-6 md:justify-between">
        <TodoForm />
        <input
          type="text"
          className="pl-4 rounded-md h-12"
          placeholder="Search..."
        />
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
