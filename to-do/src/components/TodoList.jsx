import React from 'react'
import { useState } from 'react'
import {GrEdit} from 'react-icons/gr'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import TodoForm from './TodoForm'

function TodoList({todos,updateTodo,removeTodo,completeTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value:"",
    })
    const submitUpdate = (value)=>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:" ",
        })
    }

    if(edit.id){
        return <TodoForm edit = {edit} onSubmit = {submitUpdate}/>
    }
  return (
    <div>
        {todos.map((todo,index)=>(
            <>
            <div 
            className={todo.isCompleted?'todo-completed':"todo-container"}
            key={index}>
                <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                    {todo.text}
                    </div>
            
                    <div className='icons'>
                        <RiDeleteBin5Fill 
                        onClick={()=>removeTodo(todo.id)}
                        className="delete-icon"
                        />
                        <GrEdit 
                        onClick={()=>setEdit({id:todo.id,value:todo.text})}
                        className='edit-icon'
                        />
                    </div>
            </div>
            </>
        ))}
    </div>
  )
}

export default TodoList
