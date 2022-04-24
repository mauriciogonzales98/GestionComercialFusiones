import React from 'react'
import { FamiliaresItem } from './FamiliaresItem';

export function FamiliaresList( {familiares, sumar, restar} ) {
  return (
    <ul>
        {familiares.map((familiares)=>(
            <FamiliaresItem key={familiares.id} familiares={familiares} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}