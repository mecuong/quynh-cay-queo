import React, { FunctionComponent } from "react";


const HeaderComponent :  FunctionComponent<any> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <a className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 md:text-2xl hover:text-green-400"
          href="#">
          Quỳnh Cây Quéo
        </a>
        <div onClick={() => setIsOpen(!isOpen) } className="flex md:hidden">
          <button type="button" className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400"
          href="#">Home</a>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400"
          href="#about">About Us</a>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400"
          href="#our-menu">Our Menu</a>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400"
          href="#gallery">Gallery</a>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-green-400"
          href="#order">Order</a>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default HeaderComponent;