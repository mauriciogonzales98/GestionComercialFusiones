import React from "react";

export function CarlitosItem ({ carlitos, sumar, restar }){
    const {id, nombre, cant} = carlitos;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {carlitos.nombre} | {carlitos.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}