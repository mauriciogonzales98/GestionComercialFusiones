import React, { Fragment, useState, useEffect } from 'react';
import { PizzasList } from './components/PizzasList';

const KEY = "pizzas";

export function Pizzas(props){

    const [pizzas, setPizzas] = useState([
        {id: 1, nombre: "Pizza 4 Muzzarella", cant: 0},
        {id: 2, nombre: "Pizza 4 Especial", cant: 0},
        {id: 3, nombre: "Pizza 4 Napolitana", cant: 0},
        {id: 4, nombre: "Pizza 4 Fugazza", cant: 0},
        {id: 5, nombre: "Pizza 4 Rucula", cant: 0},
        {id: 6, nombre: "Pizza 4 3 Quesos", cant: 0},
        {id: 7, nombre: "Pizza 4 Pollo", cant: 0},
        {id: 8, nombre: "Pizza 4 Cheddar y Cebolla", cant: 0},
        {id: 9, nombre: "Pizza 8 Muzzarella", cant: 0},
        {id: 10, nombre: "Pizza 8 Especial", cant: 0},
        {id: 11, nombre: "Pizza 8 Napolitana", cant: 0},
        {id: 12, nombre: "Pizza 8 Fugazza", cant: 0},
        {id: 13, nombre: "Pizza 8 Rucula", cant: 0},
        {id: 14, nombre: "Pizza 8 3 Quesos", cant: 0},
        {id: 15, nombre: "Pizza 8 Pollo", cant: 0},
        {id: 16, nombre: "Pizza 8 Cheddar y Cebolla", cant: 0},
        {id: 17, nombre: "Pizza 12 Muzzarella", cant: 0},
        {id: 18, nombre: "Pizza 12 Especial", cant: 0},
        {id: 19, nombre: "Pizza 12 Napolitana", cant: 0},
        {id: 20, nombre: "Pizza 12 Fugazza", cant: 0},
        {id: 21, nombre: "Pizza 12 Rucula", cant: 0},
        {id: 22, nombre: "Pizza 12 3 Quesos", cant: 0},
        {id: 23, nombre: "Pizza 12 Pollo", cant: 0},
        {id: 24, nombre: "Pizza 12 Cheddar y Cebolla", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(pizzas))
    }, [pizzas] );

    const sumar = (id) =>{
        const newPizzas = [...pizzas];
        const pizza = newPizzas.find((pizza) =>pizza.id === id);
        pizza.cant+= 2;
        setPizzas(newPizzas);
        props.onPizzasChange(totalViandas(newPizzas));
    }
    
    const restar = (id) =>{
        const newPizzas = [...pizzas];
        const pizza = newPizzas.find((pizza) =>pizza.id === id);
        pizza.cant-= 2;
        setPizzas(newPizzas);
        props.onPizzasChange(totalViandas(newPizzas));
    }


    const totalViandas = (pizzas) =>{
        let total = 0, cantidad;
        for(cantidad in pizzas){
            total += pizzas[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <PizzasList pizzas={pizzas} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}