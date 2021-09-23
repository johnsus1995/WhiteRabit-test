import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import NewUserBtn from './NewUserBtn'

function Navbar() {
    return (
        <div className="container">

            <Link to="/">Home</Link>
            <Link to="/createUser">
                <NewUserBtn />
            </Link>

        </div>
    )
}

export default Navbar
