import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './../../crown.svg'
import {auth } from './../../firebase/firebase.utils'

import './header.style.scss'
const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contract">CONTRACT</Link>
            {
                currentUser ?
                <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header; 