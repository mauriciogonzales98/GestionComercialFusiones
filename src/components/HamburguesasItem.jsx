import React from "react";

export function HambItem ({ hambs, sumar, restar }){
    const {id, nombre, cant} = hambs;
    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };
        //<input type="checkbox" checked={completed} onChange={handleTodoClick}/>
    return (<li> 
        {hambs.nombre} | {hambs.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}