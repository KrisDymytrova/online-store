import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterMapping from './router/RouterMapping';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <RouterMapping />
        </BrowserRouter>
    );
};

export default App;