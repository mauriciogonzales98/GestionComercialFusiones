import React from 'react'
import { HambItem } from './HamburguesasItem';

export function HambList( {hambs, sumar, restar} ) {
  return (
    <ul>
        {hambs.map((hambs)=>(
            <HambItem key={hambs.id} hambs={hambs} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}