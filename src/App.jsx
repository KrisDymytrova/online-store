import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterMapping from './router/RouterMapping';
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/UI/ScrollToTop/index.js";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <RouterMapping />
            <ScrollToTopButton />
        </BrowserRouter>
    );
};

export default App;