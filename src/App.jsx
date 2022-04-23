import React, { Fragment, useState, useEffect } from 'react';
import { Hamburguesas } from './Hamburguesas';
import { Minutas } from './Minutas';

export function App() {

    const [state, setState] = useState({
        minutasQty: 0,
        hamburguesasQty: 0
    });

    const minutasChanged = (newQty) => {
        setState({ ...state, minutasQty: newQty });
    }

    //useEffect(() => console.log(state), [state]);

    return (
        <Fragment>
            <Minutas onMinutasChange={minutasChanged} />
            <Hamburguesas />
        </Fragment>
    );
}