import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/navigations/Navbar';
import Sections from './components/pages/Sections';
import Viandas from './components/pages/Viandas';
import Index from './components/pages/Index';
import CostoFijo from './components/pages/CostoFijo';

export function App() {

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
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        
                        <Route path='/Viandas' element={<Viandas />} />
                        <Route path='/CostoFijo' element={<CostoFijo />} />
                        <Route path='/Sections' element={<Sections /> } />
                        <Route path="/Index" element={<Index />} />

                    </Routes>
                </Router>
            </div>
        </Fragment>
    );
}