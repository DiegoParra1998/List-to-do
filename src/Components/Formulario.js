import React, { useState, useEffect, useRef  } from 'react';

function Formulario(props) {
    const [input,setInput] = useState('');

    const inputRef = useRef(null)

    useEffect (() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e =>{
       e.preventDefault(); 

       props.onSubmit({
           id: Math.floor(Math.random() * 10000),
           text: input
       });
       setInput('');

    };
   
   
    return (
        
        <form className='lista-form' onSubmit={handleSubmit}> 
            <input type='text' 
             placeholder='Escribe aquí tu tarea'
             required="Digita tu tarea"
             value={input}
             name='text' 
             className= 'lista-input'
             onChange={handleChange}
             ref={inputRef}
            />

            <button className='lista-btn'>Agregar</button>

            <h4 className="sub-title">Nota: Si terminaste alguna tarea, solo debes dar clic en la tarea que realizaste.</h4>
        </form>
    );
}

export default Formulario;
