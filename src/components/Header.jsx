import React from 'react';
import "../App.css"
import Logo from "../img/logo.svg"

function Header() {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={Logo} alt="Workflow" />
          </div>
          <div className='flex space-x-6'>
            <a href="#" className="hidden md:flex hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hidden md:flex hover:text-darkGrayishBlue">Product</a>
            <a href='#' className="hidden md:flex hover:text-darkGrayishBlue">About Us</a>
            <a href="#" className="hidden md:flex hover:text-darkGrayishBlue">Careers</a>
            <a href='#' className='hidden md:flex hover:text-darkGrayishBlue'>Community</a>
        </div>
        <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">Get Started</a>
        </div>
      </nav>
    </div>
  )
}

export default Header
