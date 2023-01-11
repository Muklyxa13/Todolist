import { TodoList } from "../TodoList/TodoList"

export const Main = ({ todos, changeStatusTodo, deleteTodo }) => {
  return (
    <main>
      <TodoList changeStatusTodo={changeStatusTodo} deleteTodo={deleteTodo} todos={todos} />
    </main>
  )
}
