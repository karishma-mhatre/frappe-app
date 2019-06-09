import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';

const Header = () => {
    return (
        <div className="container header">
            <div className="logo">FRAPP APP</div>
            <div className="menu">
                <Link to="/">LIST</Link>
                <Link to="/favourites">FAVOURITES</Link>
            </div>
        </div>
    );
}

export default Header;