import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Router from "./pages/router";
import FixedBottomNavigation from "./components/layout/appbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Router/>
                <FixedBottomNavigation/>
            </BrowserRouter>
        </div>
    );
}

export default App;
