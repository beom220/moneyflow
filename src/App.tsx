import React from 'react';
import { BrowserRouter } from "react-router-dom";
import FixedBottomNavigation from "./components/appbar";
import Router from "./router";

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
