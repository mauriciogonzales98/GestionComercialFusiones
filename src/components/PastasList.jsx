import React from 'react'
import { PastasItem } from './PastasItem';

export function PastasList( {pastas, sumar, restar} ) {
  return (
    <ul>
        {pastas.map((pastas)=>(
            <PastasItem key={pastas.id} pastas={pastas} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}