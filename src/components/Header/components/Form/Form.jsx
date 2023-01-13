import { useState } from 'react'
import { useTodoListMethodsContext } from '../../../../contexts/TodoListContextProvider'
import styles from './form.module.css'
import classNames from 'classnames'

export const Form = () => {
  console.log('Render Form')
  const [title, setInput] = useState('')

  const { addNewTodo } = useTodoListMethodsContext()

  const changeHandler = (e) => {
    // e - синтетическое событие
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (title.length) {
      addNewTodo(title)
      setInput('')
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <input
            value={title}
            onChange={changeHandler}
            placeholder="Title..."
            type="text"
            className={classNames('form-control', styles.input)}
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary border border-white text-white">
          Add
        </button>
      </form>
    </div>
  )
}
