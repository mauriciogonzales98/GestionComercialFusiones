import React from "react";

export function WoksItem ({ woks, sumar, restar }){
    const {id, nombre, cant} = woks;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {woks.nombre} | {woks.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}