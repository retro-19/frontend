import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Retro Board'19</Link>
            </nav>
        )
    }

export default Navbar;