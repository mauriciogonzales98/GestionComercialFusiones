import React, { Fragment, useState, useEffect } from 'react';
import { PastasList } from './components/PastasList';

const KEY = "pastas";

export function Pastas(props){

    const [pastas, setPastas] = useState([
        {id: 1, nombre: "Fideos Tuco/Crema/Mixta", cant: 0},
        {id: 2, nombre: "Fideos Bolognesa", cant: 0},
        {id: 3, nombre: "Fideos Albondigas", cant: 0},
        {id: 4, nombre: "Ñoqui Tuco/Crema/Mixta", cant: 0},
        {id: 5, nombre: "Ñoqui Bolognesa", cant: 0},
        {id: 6, nombre: "Ñoqui Albondigas", cant: 0},
        {id: 7, nombre: "Ravioles Casero Tuco/Crema/Mixta", cant: 0},
        {id: 8, nombre: "Ravioles Casero Bolognesa", cant: 0},
        {id: 9, nombre: "Ravioles Casero Albondigas", cant: 0},
        {id: 10, nombre: "Fideos Casero Tuco/Crema/Mixta", cant: 0},
        {id: 11, nombre: "Fideos Casero Bolognesa", cant: 0},
        {id: 12, nombre: "Fideos Casero Albondigas", cant: 0},
        {id: 13, nombre: "Ravioles Tuco/Crema/Mixta", cant: 0},
        {id: 14, nombre: "Ravioles Bolognesa", cant: 0},
        {id: 15, nombre: "Ravioles Albondigas", cant: 0},
    ]);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(pastas))
    }, [pastas] );

    const sumar = (id) =>{
        const newPastas = [...pastas];
        const pasta = newPastas.find((pasta) =>pasta.id === id);
        pasta.cant++;
        setPastas(newPastas);
        props.onPastasChange(totalViandas(newPastas));
    }
    
    const restar = (id) =>{
        const newPastas = [...pastas];
        const pasta = newPastas.find((pasta) =>pasta.id === id);
        pasta.cant--;
        setPastas(newPastas);
        props.onPastasChange(totalViandas(newPastas));
    }


    const totalViandas = (pastas) =>{
        let total = 0, cantidad;
        for(cantidad in pastas){
            total += pastas[cantidad].cant;
        }

        return total;
    }

    return (
        <Fragment>
            <PastasList pastas={pastas} sumar={sumar} restar={restar}/>
        </Fragment>    
    );
}