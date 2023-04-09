import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dictionary from './pages/Dictionary/Dictionary';
import MyList from './pages/MyList/MyList';


export default () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/mylist" element={<MyList />} />
        </Routes> 
    );

}