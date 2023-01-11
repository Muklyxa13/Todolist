import styles from "./todoItem.module.css"
import classNames from "classnames"
import { useTodoListMethodsContext } from "../../contexts/TodoListContextProvider"

export const TodoItem = ({ title, id, index, completed }) => {
  const { changeStatusTodo, deleteTodo } = useTodoListMethodsContext()

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
        <button
          onClick={completedHandler}
          type="button"
          className={classNames("btn", "mx-2", { "btn-primary": completed }, { "btn-success": !completed })}
        >
          {completed ? "Undone" : "Done"}
        </button>
        <button onClick={deleteHandler} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )
}
