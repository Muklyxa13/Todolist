import styles from './todoItem.module.css'
import classNames from 'classnames'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'

export const TodoItem = ({ title, id, index, completed }) => {
  const { changeStatusTodo, deleteTodo } = useTodoListMethodsContext()

  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false)

  const closeDeleteModalHandler = () => {
    setisDeleteModalOpen(false)
  }

  const openDeleteModalHandler = () => {
    setisDeleteModalOpen(true)
  }

  const completedHandler = () => {
    changeStatusTodo(id)
  }

  const deleteHandler = () => {
    deleteTodo(id)
    closeDeleteModalHandler()
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? styles.done : ''}>
        {index + 1}. {title}
      </span>

      <Modal isOpen={isDeleteModalOpen} closeHandler={closeDeleteModalHandler}>
        <p className={styles.textModal}>
          Do you want to delete the task <b>&quot;{title}&quot;</b>?
        </p>
        <div className="d-flex justify-content-center">
          <button onClick={deleteHandler} type="button" className={styles.yesDelete}>
            Yes
          </button>
          <button onClick={closeDeleteModalHandler} type="button" className={styles.noDelete}>
            No
          </button>
        </div>
      </Modal>

      <div>
        <button
          onClick={completedHandler}
          type="button"
          className={classNames(
            'btn',
            'mx-2',
            { 'btn-primary': completed },
            { 'btn-success': !completed }
          )}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button onClick={openDeleteModalHandler} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )
}
