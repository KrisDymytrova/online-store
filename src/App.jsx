import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterMapping from './router/RouterMapping';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from "./components/UI/ScrollToTopButton";

const App = () => {
    return (
        <BrowserRouter>
            <RouterMapping />
            <ScrollToTopButton />
        </BrowserRouter>
    );
};

export default App;