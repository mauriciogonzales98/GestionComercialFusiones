import React, { Fragment, useState, useEffect } from 'react';
import { HambList } from './components/HamburguesasList';

const KEY = "hambs";
//const costoFijo = 255;

export function Hamburguesas(){

    const [hambs, setHambs] = useState([
        {id: 1, nombre: "Hamburguesa Comun", cant: 0},
        {id: 2, nombre: "Hamburguesa Especial", cant: 0},
        {id: 3, nombre: "Hamburguesa Completa", cant: 0},
        {id: 4, nombre: "Hamburguesa Doble", cant: 0},
        {id: 5, nombre: "Hamburguesa Fusiones", cant: 0}
    ]);

    //const hambRef = useRef();

    /*useEffect(() => {
        const storedHambs = JSON.parse(localStorage.getItem(KEY));
        if(storedHambs){
            setHambs(storedHambs);
        }
    }, [] );*/

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(hambs))
    }, [hambs] );

    const sumar = (id) =>{
        const newHambs = [...hambs];
        const hamb = newHambs.find((hamb) =>hamb.id === id);
        hamb.cant++;
        setHambs(newHambs);
    }
    
    const restar = (id) =>{
        const newHambs = [...hambs];
        const hamb = newHambs.find((hamb) =>hamb.id === id);
        hamb.cant--;
        setHambs(newHambs);
    }


    const totalViandas = (hambs) =>{
        let total = 0, cantidad;
        for(cantidad in hambs){
            total += hambs[cantidad].cant;
        }
        return total;
    }

    const handleReset = () =>{
        reset(hambs);
    }

    const reset = (hambs) =>{
        let cantidad;
        
        for(cantidad in hambs){
            hambs[cantidad].cant = 0;
        }
        setHambs(hambs);
        
    }

    return (
        <Fragment>
            <HambList hambs={hambs} sumar={sumar} restar={restar}/>
            <div>
                El total de viandas es: {totalViandas(hambs)}
            </div>
            <button onClick={handleReset}>Reset</button>

        </Fragment>    
        
    );
}