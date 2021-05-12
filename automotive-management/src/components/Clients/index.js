import React from 'react';

//************************************** React Components ******************************************
import Header from '../Header'
import Footer from '../Footer'
import Clients from './Clients'

export default function index() {

    return (
        <div>
            <Header/>
            <Clients/>
            <Footer/>
        </div>
    )
}
