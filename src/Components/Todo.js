import React, {useReducer, useState} from 'react'
import Formulario from './Formulario'
import { FcDeleteDatabase} from 'react-icons/fc'
import { AiFillEdit} from 'react-icons/ai'


function Todo({todos, completeTodo, removeTodo, updateTodo }) {


    const [editar, setEditar] = useState({
        id: null,
        value:''
    });

    const submitUpdate = value => {
        updateTodo(editar.id, value);
        setEditar({
            id: null,
            value:''
        });
    };

    if (editar.id){
        return <Formulario editar={editar} onSubmit={submitUpdate} />;
    }


    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' :
               'todo-row'} 
                 key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                      {todo.text}
            </div>

            <div className='icons'>
                <FcDeleteDatabase onClick={() => removeTodo(todo.id)}
                className='delete-icon'/>
                <AiFillEdit onClick={() =>setEditar({id: todo.id, value: todo.text})}
                className='edit-icon'/>
             </div>
        </div>
    ));
}

export default Todo;
