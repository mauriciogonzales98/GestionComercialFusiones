import React from 'react'
import { PizzanesasItem } from './PizzanesasItem';

export function PizzanesasList( {pizzanesas, sumar, restar} ) {
  return (
    <ul>
        {pizzanesas.map((pizzanesas)=>(
            <PizzanesasItem key={pizzanesas.id} pizzanesas={pizzanesas} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}