import { useState } from 'react'
import { useTodoListMethodsContext } from '../../../../contexts/TodoListContextProvider'
import { Modal } from '../../../Modal/Modal'
import styles from '../../todoItem.module.css'

export const EditTodoModal = ({ setisEditModalOpen, isOpen, title, id }) => {
  const { editTodo } = useTodoListMethodsContext()

  const [input, setInput] = useState(title)

  const closeHandler = () => {
    setisEditModalOpen(false)
  }

  const saveTodo = () => {
    editTodo(id, {
      title: input,
    })
    closeHandler()
  }

  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler}>
      <p className={styles.textEditModal}>
        Rename task <b>&quot;{title}&quot;</b>
      </p>
      <input
        className={styles.inputEditModal}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="d-flex justify-content-center">
        <button onClick={saveTodo} type="button" className={styles.save} disabled={!input}>
          Save
        </button>
        <button onClick={closeHandler} type="button" className={styles.cancel}>
          Cancel
        </button>
      </div>
    </Modal>
  )
}
