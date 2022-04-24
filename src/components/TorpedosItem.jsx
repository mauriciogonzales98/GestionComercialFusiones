import React from "react";

export function TorpedosItem ({ torpedos, sumar, restar }){
    const {id, nombre, cant} = torpedos;

    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };

    return (<li> 
        {torpedos.nombre} | {torpedos.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}