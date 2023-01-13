import { memo } from 'react'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'

export const Footer = memo(() => {
  console.log('Render Footer')
  const { clearAllTodos } = useTodoListMethodsContext()
  return (
    <footer className="d-flex justify-content-center">
      <button
        onClick={clearAllTodos}
        type="button"
        className="btn btn-outline-secondary border border-white text-white"
      >
        Clear All
      </button>
    </footer>
  )
})
