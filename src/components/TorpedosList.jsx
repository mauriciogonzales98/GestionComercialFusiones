import React from 'react'
import { TorpedosItem } from './TorpedosItem';

export function TorpedosList( {torpedos, sumar, restar} ) {
  return (
    <ul>
        {torpedos.map((torpedos)=>(
            <TorpedosItem key={torpedos.id} torpedos={torpedos} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}