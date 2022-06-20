// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './headers.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="headerTitle">Call a Friend me</h1>
            <p className="headerSubtitle">Your Friendly Contact App</p>
        </header>

    )

}

export default Header;