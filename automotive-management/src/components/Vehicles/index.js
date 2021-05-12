import React from 'react';

//************************************** React Components ******************************************
import Header from '../Header'
import Footer from '../Footer'
import Vehicles from './Vehicles'

export default function index() {

    return (
        <div>
            <Header/>
            <Vehicles/>
            <Footer/>
        </div>
    )
}
