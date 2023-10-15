import React from 'react'
import TodoItem from './TodoItem'

type Props = {}

const TodoList = (props: Props) => {
  return (
    <ul className='mt-14 flex flex-col gap-5'>
        <TodoItem />
        <TodoItem />
    </ul>
  )
}

export default TodoList