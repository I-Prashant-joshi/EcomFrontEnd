import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from '../Component/Slider';
import Navbar from "../Component/navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function Home(){
    return(
        <div>
        <Navbar />
        <Slider />
        </div>
    //    <BrowserRouter>
    //  
    //    <Routes>
    //     <Route > </Route>
    //    </Routes>
    //    </BrowserRouter>
    )
}
export default Home;