import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../assets/icon';
import { AuthService } from '../services/auth.Service';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      navigate('/login'); // Redirigir a la página de inicio de sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="bg-amber-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{fontFamily: 'Manrope, sans-serif'}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Icon />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-amber-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-amber-100">
            
            <li>
              <Link to="/" className="block py-2 px-3 text-black rounded-sm md:bg-transparent md:p-0 hover:bg-amber-200" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200  md:p-0">Login</Link>
            </li>
            <li>
              <Link to="/register" className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200  md:p-0">Registro</Link>
            </li>
            <li>
              <Link to="/profile" className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200  md:p-0">Profile</Link>
            </li>
            <li>
              <Link to="/product" className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200  md:p-0"></Link>
            </li>
            <li>
              <Link to="/Inventory" className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200  md:p-0">Inventory</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block py-2 px-3 text-black rounded-sm hover:bg-amber-200 md:p-0">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;