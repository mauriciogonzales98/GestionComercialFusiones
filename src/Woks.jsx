import React, { Fragment, useState, useEffect } from 'react';
import { WoksList } from './components/WoksList';

const KEY = "woks";

export function Woks(props){

    const [woks, setWoks] = useState([
        {id: 1, nombre: "Wok Tradicional", cant: 0},
        {id: 2, nombre: "Wok Vegetales Pollo", cant: 0},
        {id: 3, nombre: "Wok Vegetales Cerdo", cant: 0},
        {id: 4, nombre: "Wok Vegetales Carne", cant: 0},
        {id: 5, nombre: "Wok Arroz Vegetales", cant: 0},
        {id: 6, nombre: "Wok Arroz Pollo", cant: 0},
        {id: 7, nombre: "Wok Arroz Cerdo", cant: 0},
        {id: 8, nombre: "Wok Arroz Carne", cant: 0},
        {id: 9, nombre: "Wok Fideos Vegetales", cant: 0},
        {id: 10, nombre: "Wok Fideos Pollo", cant: 0},
        {id: 11, nombre: "Wok Fideos Cerdo", cant: 0},
        {id: 12, nombre: "Wok Fideos Carne", cant: 0},
        {id: 13, nombre: "Lomo Saltado", cant: 0},
        {id: 14, nombre: "Pollo Saltado", cant: 0},
        {id: 15, nombre: "Arroz amarillo", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(woks))
    }, [woks] );

    const sumar = (id) =>{
        const newWoks = [...woks];
        const wok = newWoks.find((wok) =>wok.id === id);
        wok.cant++;
        setWoks(newWoks);
        props.onWoksChange(totalViandas(newWoks));
    }
    
    const restar = (id) =>{
        const newWoks = [...woks];
        const wok = newWoks.find((wok) =>wok.id === id);
        wok.cant--;
        setWoks(newWoks);
        props.onWoksChange(totalViandas(newWoks));
    }


    const totalViandas = (woks) =>{
        let total = 0, cantidad;
        for(cantidad in woks){
            total += woks[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <WoksList woks={woks} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}