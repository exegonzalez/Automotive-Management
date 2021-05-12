import React from 'react';

//************************************** React Components ******************************************
import Header from '../Header'
import Footer from '../Footer'
import Budgets from './Budgets'

export default function index() {

    return (
        <div>
            <Header/>
            <Budgets/>
            <Footer/>
        </div>
    )
}
