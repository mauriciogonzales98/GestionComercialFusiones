import React, { Fragment, useState, useEffect } from 'react';
import { Hamburguesas } from './Hamburguesas';
import { Minutas } from './Minutas';
import { Woks } from './Woks';

export function App() {

    let total = 0;

    const [state, setState] = useState({
        minutasQty: 0,
        hamburguesasQty: 0,
        woksQty: 0,
    });

    const minutasChanged = (newQty) => {
        setState({ ...state, minutasQty: newQty });
    }

    const hamburguesasChanged = (newQty) => {
        setState({ ...state, hamburguesasQty: newQty });
    }

    const woksChanged = (newQty) => {
        setState({ ...state, woksQty: newQty });
    }

    total = state.hamburguesasQty + state.minutasQty + state.woksQty;

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
            <Minutas onMinutasChange={minutasChanged} /> <br></br>
            <Hamburguesas onHamburguesasChange={hamburguesasChanged}/> <br></br>
            <Woks onWoksChange={woksChanged} /> <br></br>

            <div>
                El total de viandas es {total}
            </div>
        </Fragment>
    );
}