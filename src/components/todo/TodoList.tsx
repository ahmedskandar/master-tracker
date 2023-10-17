import TodoItem from "./TodoItem";
import { useTodoCategory } from "../../context/TodoCategoryContext";
import { ListType } from "../../lib/types";
import { getFilteredTodo } from "../../data/constants";

const TodoList = ({ searchInput }: ListType) => {
  // Access state and dispatch function from the TodoContext
  const { state, dispatch } = useTodoCategory();

  const filteredTodo = getFilteredTodo(searchInput, state.todo).sort(
    (todo1, todo2) => (todo1.isChecked ? 1 : todo2.isChecked ? -1 : 0)
  );

  return (
    <>
      {Object.keys(filteredTodo).length === 0 && (
        <p className="text-center mt-14 text-white">No todo found</p>
      )}

      {Object.keys(filteredTodo).length !== 0 && (
        <ul className="mt-14 hide-scroll flex flex-col gap-5 max-h-48 overflow-y-scroll border-r pr-2">
          {filteredTodo.map((todoItem, index) => (
            <TodoItem
              key={todoItem.id}
              index={index}
              dispatch={dispatch}
              {...todoItem}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
