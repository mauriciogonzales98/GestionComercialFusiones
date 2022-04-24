import React from "react";

export function PizzanesasItem ({ pizzanesas, sumar, restar }){
    const {id, nombre, cant} = pizzanesas;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {pizzanesas.nombre} | {pizzanesas.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}