import React from 'react';

//************************************* React Components ****************************************
import Header from '../../Header'
import Footer from '../../Footer'
import NewTransfer from './NewTransfer'

export default function index() {
    return (
        <div>
            <Header/>
            <NewTransfer/>
            <Footer/>
        </div>
    )
}