import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store'
import { nanoid } from 'nanoid'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
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
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
