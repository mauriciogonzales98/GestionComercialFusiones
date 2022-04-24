import React, { Fragment, useState, useEffect } from 'react';
import { PizzanesasList } from './components/PizzanesasList';

const KEY = "pizzanesas";

export function Pizzanesas(props){

    const [pizzanesas, setPizzanesas] = useState([
        {id: 1, nombre: "Pizzanesa Milanesa Muzzarella", cant: 0},
        {id: 2, nombre: "Pizzanesa Milanesa Especial", cant: 0},
        {id: 3, nombre: "Pizzanesa Milanesa Napolitana", cant: 0},
        {id: 4, nombre: "Pizzanesa Milanesa Fugazza", cant: 0},
        {id: 5, nombre: "Pizzanesa Milanesa Rucula", cant: 0},
        {id: 6, nombre: "Pizzanesa Milanesa 3 Quesos", cant: 0},
        {id: 7, nombre: "Pizzanesa Milanesa Cheddar y Cebolla", cant: 0},
        {id: 8, nombre: "Pizzanesa Pollo Muzzarella", cant: 0},
        {id: 9, nombre: "Pizzanesa Pollo Especial", cant: 0},
        {id: 10, nombre: "Pizzanesa Pollo Napolitana", cant: 0},
        {id: 11, nombre: "Pizzanesa Pollo Fugazza", cant: 0},
        {id: 12, nombre: "Pizzanesa Pollo Rucula", cant: 0},
        {id: 13, nombre: "Pizzanesa Pollo 3 Quesos", cant: 0},
        {id: 14, nombre: "Pizzanesa Pollo Cheddar y Cebolla", cant: 0},
        {id: 15, nombre: "Pizzanesa Cerdo Muzzarella", cant: 0},
        {id: 16, nombre: "Pizzanesa Cerdo Especial", cant: 0},
        {id: 17, nombre: "Pizzanesa Cerdo Napolitana", cant: 0},
        {id: 18, nombre: "Pizzanesa Cerdo Fugazza", cant: 0},
        {id: 19, nombre: "Pizzanesa Cerdo Rucula", cant: 0},
        {id: 20, nombre: "Pizzanesa Cerdo 3 Quesos", cant: 0},
        {id: 21, nombre: "Pizzanesa Cerdo Cheddar y Cebolla", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(pizzanesas))
    }, [pizzanesas] );

    const sumar = (id) =>{
        const newPizzanesas = [...pizzanesas];
        const pizzanesa = newPizzanesas.find((pizzanesa) =>pizzanesa.id === id);
        pizzanesa.cant++;
        setPizzanesas(newPizzanesas);
        props.onPizzanesasChange(totalViandas(newPizzanesas));
    }
    
    const restar = (id) =>{
        const newPizzanesas = [...pizzanesas];
        const pizzanesa = newPizzanesas.find((pizzanesa) =>pizzanesa.id === id);
        pizzanesa.cant--;
        setPizzanesas(newPizzanesas);
        props.onPizzanesasChange(totalViandas(newPizzanesas));
    }


    const totalViandas = (pizzanesas) =>{
        let total = 0, cantidad;
        for(cantidad in pizzanesas){
            total += pizzanesas[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <PizzanesasList pizzanesas={pizzanesas} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}