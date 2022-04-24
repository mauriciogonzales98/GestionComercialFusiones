import React, { Fragment, useState, useEffect } from 'react';
import { Hamburguesas } from './Hamburguesas';
import { Minutas } from './Minutas';
import { Woks } from './Woks';
import { Torpedos } from './Torpedos';
import { Carlitos } from './Carlitos';
import { Familiares } from './Familiares';
import { Pizzanesas } from './Pizzanesas';
import { Pastas } from './Pastas';

export function App() {

    let total = 0;

    const [state, setState] = useState({
        minutasQty: 0,
        hamburguesasQty: 0,
        woksQty: 0,
        torpedosQty: 0,
        carlitosQty: 0,
        familiaresQty: 0,
        pizzanesasQty: 0,
        pastasQty: 0,
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

    const torpedosChanged = (newQty) => {
        setState({ ...state, torpedosQty: newQty });
    }

    const carlitosChanged = (newQty) => {
        setState({ ...state, carlitosQty: newQty });
    }

    const familiaresChanged = (newQty) => {
        setState({ ...state, familiaresQty: newQty });
    }

    const pizzanesasChanged = (newQty) => {
        setState({ ...state, pizzanesasQty: newQty });
    }

    const pastasChanged = (newQty) => {
        setState({ ...state, pastasQty: newQty });
    }

    total = state.hamburguesasQty + state.minutasQty + state.woksQty + state.torpedosQty + state.carlitosQty + state.familiaresQty + state.pizzanesasQty;

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
            <Torpedos onTorpedosChange={torpedosChanged} /> <br></br>
            <Carlitos onCarlitosChange={carlitosChanged} /> <br></br>
            <Familiares onFamiliaresChange={familiaresChanged} /> <br></br>
            <Pizzanesas onPizzanesasChange={pizzanesasChanged} /> <br></br>
            <Pastas onPastasChange={pastasChanged} /> <br></br>
            <div>
                El total de viandas es {total}
            </div>
        </Fragment>
    );
}