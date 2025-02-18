import React from 'react'
import Icon from '../assets/icon'

function Footer() {
  return (
    

<footer className="shadow-sm bg-amber-100 pt-4">
    <div className="w-full max-w-screen-xl mx-auto  md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Icon/>
            <ul className="flex flex-wrap-reverse items-center mb-6 text-sm font-medium text-black sm:mb-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center dark:text-black">© 2025 <a href="https://flowbite.com/" className="hover:underline">Invcontrol™</a> Cesar Gonzalez.</span>
    </div>
</footer>


  )
}

export default Footer