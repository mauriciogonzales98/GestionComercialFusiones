import React from "react";

export function EnsaladasItem ({ ensaladas, sumar, restar }){
    const {id, nombre, cant} = ensaladas;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {ensaladas.nombre} | {ensaladas.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}