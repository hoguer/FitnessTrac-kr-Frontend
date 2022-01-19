import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Routines, Activities } from './components';

const App = () => {
    return <div>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/routines' element={<Routines />} />
            <Route path='/activities' element={<Activities />} />
        </Routes>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app'),
);