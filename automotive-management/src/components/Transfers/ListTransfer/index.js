import React from 'react';

//************************************* React Components ****************************************
import Header from '../../Header'
import Footer from '../../Footer'
import ListTransfer from './ListTransfer'

export default function index() {
    return (
        <div>
            <Header/>
            <ListTransfer/>
            <Footer/>
        </div>
    )
}