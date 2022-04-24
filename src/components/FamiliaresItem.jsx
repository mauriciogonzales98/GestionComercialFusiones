import React from "react";

export function FamiliaresItem ({ familiares, sumar, restar }){
    const {id, nombre, cant} = familiares;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {familiares.nombre} | {familiares.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}