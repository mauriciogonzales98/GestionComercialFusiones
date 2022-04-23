import React from 'react'
import { MinutasItem } from './MinutasItem';

export function MinutasList( {minutas, sumar, restar} ) {
  return (
    <ul>
        {minutas.map((minutas)=>(
            <MinutasItem key={minutas.id} minutas={minutas} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}