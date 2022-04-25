import React, { Fragment, useState, useEffect } from 'react';
import { EnsaladasList } from './components/EnsaladasList';

const KEY = "ensaladas";

export function Ensaladas(props){

    const [ensaladas, setEnsaladas] = useState([
        {id: 1, nombre: "Ensalada Comun", cant: 0},
        {id: 2, nombre: "Ensalada Completa", cant: 0},
        {id: 3, nombre: "Ensalada Tibia Pollo", cant: 0},
        {id: 4, nombre: "Ensalada Tibia Lomo", cant: 0},
        {id: 5, nombre: "Ensalada Tibia Cerdo", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(ensaladas))
    }, [ensaladas] );

    const sumar = (id) =>{
        const newEnsaladas = [...ensaladas];
        const ensalada = newEnsaladas.find((ensalada) =>ensalada.id === id);
        ensalada.cant++;
        setEnsaladas(newEnsaladas);
        props.onEnsaladasChange(totalViandas(newEnsaladas));
    }
    
    const restar = (id) =>{
        const newEnsaladas = [...ensaladas];
        const ensalada = newEnsaladas.find((ensalada) =>ensalada.id === id);
        ensalada.cant--;
        setEnsaladas(newEnsaladas);
        props.onEnsaladasChange(totalViandas(newEnsaladas));
    }


    const totalViandas = (ensaladas) =>{
        let total = 0, cantidad;
        for(cantidad in ensaladas){
            total += ensaladas[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <EnsaladasList ensaladas={ensaladas} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}