import { useTodoListMethodsContext } from '../../../../contexts/TodoListContextProvider'
import { Modal } from '../../../Modal/Modal'
import styles from '../../todoItem.module.css'

export const DeleteTodoModal = ({ setisDeleteModalOpen, isOpen, title, id }) => {
  const { deleteTodo } = useTodoListMethodsContext()

  const closeDeleteModalHandler = () => {
    setisDeleteModalOpen(false)
  }

  const deleteHandler = () => {
    deleteTodo(id)
    closeDeleteModalHandler()
  }

  return (
    <Modal isOpen={isOpen} closeHandler={closeDeleteModalHandler}>
      <p className={styles.textDeleteModal}>
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
  )
}
