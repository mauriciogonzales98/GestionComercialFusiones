import React from "react";

export function PizzasItem ({ pizzas, sumar, restar }){
    const {id, nombre, cant} = pizzas;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {pizzas.nombre} | {pizzas.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}