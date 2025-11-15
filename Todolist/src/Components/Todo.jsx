import React,{ useState,useEffect } from 'react'

function Todo(){
    const [todo,setTodo] = useState([]);

    const [input,setInput] = useState("");

    function addTodo() {
        const text = input.trim();
        if (!text) return;
        setTodo((p) => [...p,input]);
        setInput("");
    }

    function deletetodo(index) {
        setTodo((prev) => prev.filter((value,i) => i !== index));
    }
    
    return (
        <div>
            <input value={ input } onChange={ (e) => setInput(e.target.value) } placeholder='type somethig...' ></input>
            <button onClick={ addTodo }>Add</button>
            
            <ol>
                { todo.map((item,index) => (
                    <li key={ index }>
                        { item }{" "}
                        <input type='checkbox'></input>
                        <button onClick={ () => deletetodo(index) }>
                            Delete
                            </button>
                    </li>
                ))}
            </ol>
        </div>

    )

}

export default Todo