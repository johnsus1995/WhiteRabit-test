import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import LoginBtn from './LoginBtn'
import './Navbar.css'
import NewUserBtn from './NewUserBtn'

function Navbar() {
    return (
        <div className="container">

            <Link to="/">Home</Link>
            <Link to="/createUser">
                <NewUserBtn />
            </Link>
            <Link to="/login">
                <LoginBtn/>
            </Link>
        </div>
    )
}

export default Navbar
