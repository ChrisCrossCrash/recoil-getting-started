import { useEffect } from 'react'
import { filteredTodoListState } from '../store'
import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0])
      })
  })

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
