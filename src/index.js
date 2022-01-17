import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, BrowserRouter as Router, useNavigate, useParams } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Routines from './components/Routines';
import Activities from './components/Activities';
import MyRoutines from './components/MyRoutines';
import AccountForm from './components/AccountForm'

const App = () => {
    return <div>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/main' element={<Main />}/>
            <Route path='/accountForm' element={<AccountForm />}/>
            <Route path='/routines' element={<Routines />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/myRoutines' element={<MyRoutines />}/> 
        </Routes>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app'),
);