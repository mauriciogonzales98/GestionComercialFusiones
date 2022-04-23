import React, { Fragment, useState, useEffect } from 'react';
import { MinutasList } from './components/MinutasList';
//import {v4 as uuidv4} from 'uuid';

const KEY = "minutas";
//const costoFijo = 255;

export function Minutas(props){

    const [minutas, setMinutas] = useState([
        {id: 1, nombre: "Milanesa Comun", cant: 0},
        {id: 2, nombre: "Milanesa Napolitana", cant: 0},
        {id: 3, nombre: "Milanesa Suiza", cant: 0},
        {id: 4, nombre: "Milanesa Completa", cant: 0},
        {id: 5, nombre: "Milanesa Rucula", cant: 0},
        {id: 6, nombre: "Suprema Comun", cant: 0},
        {id: 7, nombre: "Suprema Napolitana", cant: 0},
        {id: 8, nombre: "Suprema Suiza", cant: 0},
        {id: 9, nombre: "Suprema Rucula", cant: 0},
        {id: 10, nombre: "Milanesa Cerdo Comun", cant: 0},
        {id: 11, nombre: "Milanesa Cerdo Napolitana", cant: 0},
        {id: 12, nombre: "Milanesa Cerdo Suiza", cant: 0},
        {id: 13, nombre: "Milanesa Cerdo Completa", cant: 0},
        {id: 14, nombre: "Milanesa Cerdo Rucula", cant: 0},
    ]);

    //const hambRef = useRef();

    /*useEffect(() => {
        const storedHambs = JSON.parse(localStorage.getItem(KEY));
        if(storedHambs){
            setHambs(storedHambs);
        }
    }, [] );*/

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(minutas))
    }, [minutas] );

    const sumar = (id) =>{
        const newMinutas = [...minutas];
        const minuta = newMinutas.find((minuta) =>minuta.id === id);
        minuta.cant++;
        setMinutas(newMinutas);
        props.onMinutasChange(totalViandas(newMinutas));
    }
    
    const restar = (id) =>{
        const newMinutas = [...minutas];
        const minuta = newMinutas.find((minuta) =>minuta.id === id);
        minuta.cant--;
        setMinutas(newMinutas);
        props.onMinutasChange(totalViandas(newMinutas));
    }


    const totalViandas = (minutas) =>{
        let total = 0, cantidad;
        for(cantidad in minutas){
            total += minutas[cantidad].cant;
        }

        return total;
    }

    /*const handleReset = () =>{
        reset(minutas);
    }

    const reset = (minutas) =>{
        let cantidad;
        
        for(cantidad in minutas){
            minutas[cantidad].cant = 0;
        }
        setMinutas(minutas);
        
    }*/

    return (
        <Fragment>
            <MinutasList minutas={minutas} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}