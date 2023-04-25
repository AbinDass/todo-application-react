import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    const newTodos = [todo , ...todos];
    setTodos(newTodos);
  }
  const updateTodo = (todoId,newValue)=>{
    setTodos((prev)=>prev.map((item)=>(item.id===todoId?newValue:item)))
  }
  const removeTodo = (id)=>{
    const removeArr = [...todos].filter((todo)=>todo.id!==id);
    setTodos(removeArr);
  }
  const completeTodo = (id)=>{
    let updatedTodos = todos.map((todo)=>{
      if(todo.id === id){
        todo.isCompleted=!todo.isCompleted;
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  return (
    <div>
      <h1 className='header'>ADD YOUR TO DO LIST HERE</h1>
      <TodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} updateTodo ={updateTodo} removeTodo = {removeTodo} completeTodo={completeTodo}/>
    </div>
  )
}

export default Todo
