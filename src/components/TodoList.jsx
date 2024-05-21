import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo, onUpdateTodo}) {
  return (
    <div style={{width: '100%', marginTop: '50px'}}>
      {
        todos && todos.map((todo1) => ( //todos boş değilse map le
          <Todo key={todo1.id} todo = {todo1} 
          onRemoveTodo1 = {onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
        ))
      }
      
    </div>
  )
}

export default TodoList