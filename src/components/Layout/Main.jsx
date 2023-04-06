import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* <h2>Main layout</h2> */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;