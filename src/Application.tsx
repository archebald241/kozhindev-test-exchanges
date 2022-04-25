import React from 'react';
import Navbar from "./shared/Navbar";
import ExchangeTablePage from "./routes/ExchangeTablePage";

function Application() {
    return (
        <div>
            <Navbar />
            <ExchangeTablePage />
        </div>
    );
}

export default Application;
