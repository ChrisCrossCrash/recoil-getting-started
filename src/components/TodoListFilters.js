import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../store'

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => setFilter(value)

  return (
    <>
      <label htmlFor='filter-select'>Filter</label>
      <select id='filter-select' value={filter} onChange={updateFilter}>
        <option value='Show All'>Show All</option>
        <option value='Show Completed'>Show Completed</option>
        <option value='Show Uncompleted'>Show Uncompleted</option>
      </select>
    </>
  )
}
