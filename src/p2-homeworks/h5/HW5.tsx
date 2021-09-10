import React from 'react'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import Header from "./Header";

function HW5() {
    return (
        <div>
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
