import React from 'react'
import { TodoItem } from './TodoItem';

export function TodoList( {todos , toggleTodo} ) {
  return (
    <ul>
        {todos.map((todos)=>(
            <TodoItem key={todos.id} todo={todos} toggleTodo={toggleTodo}/>
        )        
        ) }
    </ul>
  );
}