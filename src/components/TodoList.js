import { filteredTodoListState } from '../store'
import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

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
