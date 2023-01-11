import { useState } from "react"
import { useTodoListMethodsContext } from "../../../../contexts/TodoListContextProvider"

export const Form = () => {
  console.log("Render Form")
  const [title, setInput] = useState("")

  const { addNewTodo } = useTodoListMethodsContext()

  const changeHandler = (e) => {
    // e - синтетическое событие
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (title.length) {
      addNewTodo(title)
      setInput("")
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <input value={title} onChange={changeHandler} placeholder="Title..." type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  )
}
