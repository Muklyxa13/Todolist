import styles from "./todoItem.module.css"

export const TodoItem = ({ title, id, index, completed, changeStatusTodo, deleteTodo }) => {
  const completedHandler = () => {
    changeStatusTodo(id)
  }

  const deleteHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? styles.done : ""}>
        {index + 1}. {title}
      </span>
      <div>
        <button onClick={completedHandler} type="button" className={completed ? "btn btn-primary mx-2" : "btn btn-success mx-2"}>
          {completed ? "Undone" : "Done"}
        </button>
        <button onClick={deleteHandler} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )
}
