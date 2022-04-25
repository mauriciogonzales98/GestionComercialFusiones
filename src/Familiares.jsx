import React, { Fragment, useState, useEffect } from 'react';
import { FamiliaresList } from './components/FamiliaresList';

const KEY = "familiares";

export function Familiares(props){

    const [familiares, setFamiliares] = useState([
        {id: 1, nombre: "Familiar Primavera", cant: 0},
        {id: 2, nombre: "Familiar Milanesa Comun", cant: 0},
        {id: 3, nombre: "Familiar Milanesa Especial", cant: 0},
        {id: 4, nombre: "Familiar Milanesa Completa", cant: 0},
        {id: 5, nombre: "Familiar Pollo Comun", cant: 0},
        {id: 6, nombre: "Familiar Pollo Especial", cant: 0},
        {id: 7, nombre: "Familiar Pollo Completo", cant: 0},
        {id: 8, nombre: "Familiar Cerdo Comun", cant: 0},
        {id: 9, nombre: "Familiar Cerdo Especial", cant: 0},
        {id: 10, nombre: "Familiar Cerdo Completo", cant: 0},
        {id: 11, nombre: "Familiar Lomito Comun", cant: 0},
        {id: 12, nombre: "Familiar Lomito Especial", cant: 0},
        {id: 13, nombre: "Familiar Lomito Completo", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(familiares))
    }, [familiares] );

    const sumar = (id) =>{
        const newFamiliares = [...familiares];
        const familiar = newFamiliares.find((familiar) =>familiar.id === id);
        familiar.cant++;
        setFamiliares(newFamiliares);
        props.onFamiliaresChange(totalViandas(newFamiliares));
    }
    
    const restar = (id) =>{
        const newFamiliares = [...familiares];
        const familiar = newFamiliares.find((familiar) =>familiar.id === id);
        familiar.cant--;
        setFamiliares(newFamiliares);
        props.onFamiliaresChange(totalViandas(newFamiliares));
    }


    const totalViandas = (familiares) =>{
        let total = 0, cantidad;
        for(cantidad in familiares){
            total += familiares[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <FamiliaresList familiares={familiares} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}