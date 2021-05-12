import React from 'react';

//************************************* React Components ****************************************
import Header from '../../Header'
import Footer from '../../Footer'
import EditTransfer from './EditTransfer'

export default function index() {
    return (
        <div>
            <Header/>
            <EditTransfer/>
            <Footer/>
        </div>
    )
}