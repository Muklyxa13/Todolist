import { useTodoListContext } from '../../contexts/TodoListContextProvider'
import { TodoItem } from '../TodoItem/TodoItem'
import styles from './todoList.module.css'
import classNames from 'classnames'

export const TodoList = () => {
  console.log('Render TodoList')

  const todos = useTodoListContext()

  if (!todos.length) return <p>List is empty...</p>

  return (
    <ul className={classNames('list-group', styles.list)}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id} // уникальный и постояный!
          id={todo.id}
          title={todo.title}
          index={index}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}
