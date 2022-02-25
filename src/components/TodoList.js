import { todoListState } from '../store'
import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
