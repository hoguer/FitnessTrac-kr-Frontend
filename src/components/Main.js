import React, { useState, useEffect } from 'react'
import {Switch, Routes, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Activities from './Activities'
import Routines from './Routines'
import AccountForm from './AccountForm'
import MyRoutines from './MyRoutines'
import Profile from './Profile'

const Main = () => {
const [token, setToken] = useState('')
const [currentUser, setCurrentUser] = useState('')
const [activities, setActivities] = useState([])
const [routines, setRoutines] = useState({})
const [accountPage, setAccountPage] = useState('login')
const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(async () => {
    const savedToken = localStorage.getItem('token')
    if (savedToken){
        console.log("token exists")
        setToken(savedToken)
        setIsLoggedIn(true)
        const userData = await fetchUserData(savedToken)
        setCurrentUser(userData.data.guest)
    }
})

return<>
<div>Hello World</div>
        <hr/>
        <Routes>
            <Route path = '/home' exact element ={
                <>
                <h1>Welcome to Fitness Tracker.</h1>
                <h3>Please make sure to sign in or register as a user first before using our website.</h3>
                </>
            }/>
            <Route path='/register' element={ <AccountForm setToken={setToken} action="register" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route path='/login' element={ <AccountForm setToken ={setToken} action="login" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route path ='/activities' element={<Activities token={token} setActivities={setActivities} activities={activities} />} />
            <Route path='/routines' element={<Routines token={token} setRoutines={setRoutines} routines={routines} />} />
            <Route path='/account/:action' element={ <AccountForm setToken={setToken} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} />} />
            <Route path='/profile' element={ <Profile isLoggedIn={isLoggedIn} currentUser={currentUser} /> }/>
            <Route path='/myRoutines' element={<MyRoutines token={token} MyRoutines={MyRoutines} />}/>
            <Route path={`/{accountPage}`} element={<>
            { accountPage === 'profile' ?
            <Profile /> : <AccountForm setToken={setToken} action="login" setAccountPage={setAccountPage} /> } 
            </>}/>
        </Routes>
</>
}

// const fetchAllRoutines = async (token) => {
     
// }

// // const fetchMyRoutines = async (username, token) => {
// //     const myRoutines = await callApi({
// //         url: `users/${username}/routines`,
// //         method: 'GET',
// //         //token:

// //     })

// //}

// useEffect(async () => {
//     if (MyRoutines.length === 0) {
//         const fetchedMyRoutines = await fetchMyRoutines(userData)
//     }
// })

// useEffect(async () => {
//     if (!token) {
//         setToken(localStorage.getItem('st-token'));
//         return;
//     }
//     const data = await fetchUserData(token);
//     setUserData(data);
// })

export default Main