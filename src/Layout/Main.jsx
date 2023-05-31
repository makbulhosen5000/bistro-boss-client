import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    const location  = useLocation();
    const noHeaderFooter =
      location.pathname.includes("login") ||
      location.pathname.includes("register");

    return (
      <div>
        {noHeaderFooter || <Header />}
        <Outlet />
        {noHeaderFooter || <Footer />}
      </div>
    );
};

export default Main;