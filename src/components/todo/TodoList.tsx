import React from 'react'
import TodoItem from './TodoItem'

type Props = {}

const TodoList = (props: Props) => {
  return (
    <ul className="mt-14 hide-scroll flex flex-col gap-5 h-48 overflow-y-scroll border-r pr-2">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoList