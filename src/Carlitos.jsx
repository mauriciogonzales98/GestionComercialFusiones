import React, { Fragment, useState, useEffect } from 'react';
import { CarlitosList } from './components/CarlitosList';
//import {v4 as uuidv4} from 'uuid';

const KEY = "carlitos";
//const costoFijo = 255;

export function Carlitos(props){

    const [carlitos, setCarlitos] = useState([
        {id: 1, nombre: "Tostado", cant: 0},
        {id: 2, nombre: "Carlitos Comun s/ papas", cant: 0},
        {id: 3, nombre: "Carlitos Comun c/ papas", cant: 0},
        {id: 4, nombre: "Carlitos Especial", cant: 0},
        {id: 5, nombre: "Carlitos Pollo", cant: 0},
        {id: 6, nombre: "Carlitos Fusiones", cant: 0},
    ]);

    //const hambRef = useRef();

    /*useEffect(() => {
        const storedHambs = JSON.parse(localStorage.getItem(KEY));
        if(storedHambs){
            setHambs(storedHambs);
        }
    }, [] );*/

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(carlitos))
    }, [carlitos] );

    const sumar = (id) =>{
        const newCarlitos = [...carlitos];
        const carlito = newCarlitos.find((carlito) =>carlito.id === id);
        carlito.cant++;
        setCarlitos(newCarlitos);
        props.onCarlitosChange(totalViandas(newCarlitos));
    }
    
    const restar = (id) =>{
        const newCarlitos = [...carlitos];
        const carlito = newCarlitos.find((carlito) =>carlito.id === id);
        carlito.cant++;
        setCarlitos(newCarlitos);
        props.onCarlitosChange(totalViandas(newCarlitos));
    }


    const totalViandas = (carlitos) =>{
        let total = 0, cantidad;
        for(cantidad in carlitos){
            total += carlitos[cantidad].cant;
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
            <CarlitosList carlitos={carlitos} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}