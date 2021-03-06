import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link className='item' to='/'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All Stream
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;
