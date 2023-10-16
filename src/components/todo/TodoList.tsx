import TodoItem from './TodoItem'
import { useTodo } from '../../context/TodoContext'

type Props = {}

const TodoList = (props: Props) => {
  const {state, dispatch} = useTodo() 
  return (
    <ul className="mt-14 hide-scroll flex flex-col gap-5 h-48 overflow-y-scroll border-r pr-2">
      {state.map((todoItem) => (
        <TodoItem key={todoItem.id} dispatch = {dispatch} {...todoItem} />
      ))}
    </ul>
  );
}

export default TodoList