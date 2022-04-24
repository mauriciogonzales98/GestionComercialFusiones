import React from 'react'
import { WoksItem } from './WoksItem';

export function WoksList( {woks, sumar, restar} ) {
  return (
    <ul>
        {woks.map((woks)=>(
            <WoksItem key={woks.id} woks={woks} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}