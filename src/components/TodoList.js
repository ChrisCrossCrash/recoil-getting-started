import { useEffect } from 'react'
import { filteredTodoListState, todoListState } from '../store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)
  const setTodoList = useSetRecoilState(todoListState)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data)
      })
  }, [setTodoList])

  return (
    <div className='todo-list'>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}
