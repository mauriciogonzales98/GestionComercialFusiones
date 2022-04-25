import React from 'react'
import { EnsaladasItem } from './EnsaladasItem';

export function EnsaladasList( {ensaladas, sumar, restar} ) {
  return (
    <ul>
        {ensaladas.map((ensaladas)=>(
            <EnsaladasItem key={ensaladas.id} ensaladas={ensaladas} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}