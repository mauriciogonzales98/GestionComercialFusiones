import React from "react";

export function PastasItem ({ pastas, sumar, restar }){
    const {id, nombre, cant} = pastas;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {pastas.nombre} | {pastas.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}