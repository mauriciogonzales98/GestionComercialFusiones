import React from 'react'
import { CarlitosItem } from './CarlitosItem';

export function CarlitosList( {carlitos, sumar, restar} ) {
  return (
    <ul>
        {carlitos.map((carlitos)=>(
            <CarlitosItem key={carlitos.id} carlitos={carlitos} sumar={sumar} restar={restar}/>
        )        
        ) }
    </ul>
  );
}