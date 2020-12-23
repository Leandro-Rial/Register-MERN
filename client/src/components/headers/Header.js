import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './header.css';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = '/'
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="#">Create Product</Link></li>
                <li><Link to="#">Category</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="#">History</Link></li>
                <li><Link to="/logout" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }

    return (
        <header>
            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'Tech Shop'}</Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login || Register</Link></li>
                }
            </ul>
        </header>
    )
}

export default Header
