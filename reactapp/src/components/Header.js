import React from 'react'
import Navbar from './Navbar'


function Header(){
    return(
        <header className = "border-b p-3 flex justify-between items-center">
            <span className = "font-bold">
                News Header
            </span>
            <Navbar/>
        </header>
    )
}

export default Header