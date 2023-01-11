import { Form } from "./components/Form/Form"
import headerStyles from "./header.module.css"

export const Header = ({ addNewTodo }) => {
  return (
    <header className={headerStyles.wr}>
      <Form addNewTodo={addNewTodo} />
    </header>
  )
}
