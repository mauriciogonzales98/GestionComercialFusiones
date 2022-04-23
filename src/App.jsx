import React, { Fragment, useState, useEffect } from 'react';
import { Hamburguesas } from './Hamburguesas';
import { Minutas } from './Minutas';

export function App() {

    let total = 0;

    const [state, setState] = useState({
        minutasQty: 0,
        hamburguesasQty: 0
    });

    const minutasChanged = (newQty) => {
        setState({ ...state, minutasQty: newQty });
    }

    const hamburguesasChanged = (newQty) => {
        setState({ ...state, hamburguesasQty: newQty });
    }

    total = state.hamburguesasQty + state.minutasQty;

    /*const totalViandas = (state) =>{
        let total = 0, cantidad;
        for(cantidad in state){
            total += state[cantidad].cant;
        }
        return total;
    }*/

    //useEffect(() => console.log(state), [state]);
    return (
        <Fragment>
            <Minutas onMinutasChange={minutasChanged} /> 
            <Hamburguesas onHamburguesasChange={hamburguesasChanged}/>
            <div>
                El total de viandas es {total}
            </div>
        </Fragment>
    );
}