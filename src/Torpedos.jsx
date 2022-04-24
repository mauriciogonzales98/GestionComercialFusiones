import React, { Fragment, useState, useEffect } from 'react';
import { TorpedosList } from './components/TorpedosList';
//import {v4 as uuidv4} from 'uuid';

const KEY = "torpedos";
//const costoFijo = 255;

export function Torpedos(props){

    const [torpedos, setTorpedos] = useState([
        {id: 1, nombre: "Torpedo Primavera", cant: 0},
        {id: 2, nombre: "Torpedo Pollo", cant: 0},
        {id: 3, nombre: "Torpedo Milanesa", cant: 0},
        {id: 4, nombre: "Torpedo Cerdo", cant: 0},
        {id: 5, nombre: "Torpedo Hamburguesa", cant: 0},
        {id: 6, nombre: "Torpedo Lomo", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(torpedos))
    }, [torpedos] );

    const sumar = (id) =>{
        const newTorpedos = [...torpedos];
        const torpedo = newTorpedos.find((torpedo) =>torpedo.id === id);
        torpedo.cant++;
        setTorpedos(newTorpedos);
        props.onTorpedosChange(totalViandas(newTorpedos));
    }
    
    const restar = (id) =>{
        const newTorpedos = [...torpedos];
        const torpedo = newTorpedos.find((torpedo) =>torpedo.id === id);
        torpedo.cant--;
        setTorpedos(newTorpedos);
        props.onTorpedosChange(totalViandas(newTorpedos));
    }


    const totalViandas = (torpedos) =>{
        let total = 0, cantidad;
        for(cantidad in torpedos){
            total += torpedos[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <TorpedosList torpedos={torpedos} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}