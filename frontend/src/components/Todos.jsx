import React from 'react'

export function Todos({todos}) {
 return <div>
    {todos.map(function(particular_todo){
        return <div>
            <h1>{particular_todo.title}</h1>
            <h2>{particular_todo.description}</h2>
            <button>{particular_todo.completed == true? "completed" : "mark as completed"}</button>
            <button>Delete todo</button>
        </div>
    })}
 </div>
}

export default Todos