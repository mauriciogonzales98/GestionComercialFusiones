import React from 'react'
import { PizzasItem } from './PizzasItem';

export function PizzasList( {pizzas, sumar, restar} ) {
  return (
    <ul>
        {pizzas.map((pizzas)=>(
            <PizzasItem key={pizzas.id} pizzas={pizzas} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}