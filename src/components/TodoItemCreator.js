import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store'
import { nanoid } from 'nanoid'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = (event) => {
    event.preventDefault()
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: nanoid(),
        title: inputValue,
        completed: false,
        userId: nanoid(),
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <form>
      <input type='text' value={inputValue} onChange={onChange} />
      <button type='submit' onClick={addItem}>
        Add
      </button>
    </form>
  )
}
