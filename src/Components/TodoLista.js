import React, {useState} from 'react'
import Formulario from './Formulario';
import Todo from './Todo';


function TodoLista() {

    const [todos, setTodos] = useState([]);

    const agg = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const nvtodos = [todo, ...todos];

        setTodos(nvtodos);
    };

    const updateTodo = (todoId, nvValue) => {
        if(!nvValue.text || /^\s*$/.test(nvValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? nvValue: item))
        );

};

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h2>LISTA DE TAREAS</h2>
            <Formulario onSubmit={agg} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updateTodo={updateTodo} /> 
            
        </div>
    );
}

export default TodoLista;
