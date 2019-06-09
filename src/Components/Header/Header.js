import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="container header">
            <div className="logo">Frappe App</div>
            <div>
                <Link to="/">List</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </div>
    );
}

export default Header;