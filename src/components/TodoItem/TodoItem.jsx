import styles from './todoItem.module.css'
import classNames from 'classnames'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'
import { useState } from 'react'
import { DeleteTodoModal } from './Modals/DeleteTodoModal/DeleteTodoModal'
import { EditTodoModal } from './Modals/EditTodoModal/EditTodoModal'

export const TodoItem = ({ title, id, index, completed }) => {
  const { changeStatusTodo, deleteTodo } = useTodoListMethodsContext()

  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setisEditModalOpen] = useState(false)

  const openDeleteModalHandler = () => {
    setisDeleteModalOpen(true)
  }

  const openEditModalHandler = () => {
    setisEditModalOpen(true)
  }

  const completedHandler = () => {
    changeStatusTodo(id)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2 border border-white rounded bg-transparent">
      <span className={completed ? styles.done : styles.undone}>
        {index + 1}. {title}
      </span>
      <div>
        <button
          onClick={openEditModalHandler}
          type="button"
          className={classNames('btn', 'btn-outline-warning')}
        >
          Edit
        </button>
        <button
          onClick={completedHandler}
          type="button"
          className={classNames(
            'btn',
            'mx-2',
            { 'btn-outline-success': completed },
            { 'btn-success': !completed }
          )}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button onClick={openDeleteModalHandler} type="button" className="btn btn-outline-danger">
          Delete
        </button>
      </div>
      <DeleteTodoModal
        isOpen={isDeleteModalOpen}
        setisDeleteModalOpen={setisDeleteModalOpen}
        title={title}
        id={id}
      />
      <EditTodoModal
        isOpen={isEditModalOpen}
        setisEditModalOpen={setisEditModalOpen}
        title={title}
        id={id}
      />
    </li>
  )
}
