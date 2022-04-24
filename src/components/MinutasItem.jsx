import React from "react";

export function MinutasItem ({ minutas, sumar, restar }){
    const {id, nombre, cant} = minutas;
    
    const handleSumar = () =>{
        sumar(id);
    };

    const handleRestar = () =>{
        restar(id);
    };
    
    return (<li> 
        {minutas.nombre} | {minutas.cant} 
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        </li>);
}