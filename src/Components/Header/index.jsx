import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderInput from './HeaderInput';
import HeaderCart from './HeaderCart';

const Header = ({handleChangeSearch}) => {
    return (
    
        <header className="header">
            <div className="grid">
                <nav className="header__navbar">
                    <HeaderLeft/>
                    <HeaderRight/>
                </nav>
                <div className="header-with-search">                   
                    <HeaderInput handleChangeSearch={handleChangeSearch}/>
                    <HeaderCart/>
                </div>
            </div>
        </header>
    );
};


export default Header;