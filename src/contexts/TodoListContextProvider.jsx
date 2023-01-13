import { useContext } from 'react'
import { useMemo } from 'react'
import { createContext } from 'react'
import { useTodos } from './useTodos'

export const TodoListContext = createContext()
export const TodoListMethodsContext = createContext()

export const TodoListContextProvider = ({ children }) => {
  const { todos, ...methods } = useTodos()

  const todoListMethods = useMemo(() => methods, [])

  return (
    <TodoListContext.Provider value={todos}>
      <TodoListMethodsContext.Provider value={todoListMethods}>
        {children}
      </TodoListMethodsContext.Provider>
    </TodoListContext.Provider>
  )
}

export const useTodoListContext = () => useContext(TodoListContext)

export const useTodoListMethodsContext = () => useContext(TodoListMethodsContext)
