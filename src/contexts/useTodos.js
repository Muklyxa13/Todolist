import { useCallback, useEffect, useState } from "react"

const TODO_LIST_LS_KEY = "TODO_LIST_LS_KEY"

export const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        const dataFromLS = localStorage.getItem(TODO_LIST_LS_KEY)
    
        const preparedData = dataFromLS ? JSON.parse(dataFromLS) : []
    
        return preparedData
      })
    
      useEffect(() => {
        localStorage.setItem(TODO_LIST_LS_KEY, JSON.stringify(todos))
      }, [todos]) // если массива зависимостей нет то функция запускается при монтировании и при рендеринге, если массив пустой то только при монтировании один раз, если заполнен массив, то при монтировании и при изменении зависимости.
    
      const addNewTodo = useCallback((title) => {
        const newTodo = {
          id: crypto.randomUUID(),
          completed: false,
          title, // title: title,
        }
    
        setTodos((prev) => [newTodo, ...prev])
      }, [setTodos]) // при пустом массиве зависимостей, функция отрисуется 1 раз, если в массиве что-то есть, то функция будет отрисоываваться каждый раз при изменении массива зависимостей!
    
      const deleteTodo = useCallback((id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      }, [setTodos])
    
      const changeStatusTodo = useCallback((id) => {
        setTodos((prev) =>
          prev.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
    
            return todo
          })
        )
      }, [setTodos])
    
      // eslint-disable-next-line no-unused-vars
      const clearAllTodos = useCallback(() => {
        setTodos([])
      }, [setTodos])

      return {
        todos,
        clearAllTodos,
        changeStatusTodo,
        deleteTodo,
        addNewTodo
    }
}