import React from 'react';
import backgroundImage from '../assets/homePage.jpg'; // Asegúrate de ajustar la ruta según tu estructura de proyecto

const Home: React.FC = () => {
  return (
    <div
      className="relative inset-0 bg-black  w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        
      <div className=" bg-amber-100 rounded-1xl bg-opacity-50  flex items-center justify-items-end">
        
        <div className="bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-5xl font-bold text-black">Bienvenido a Invcontrol</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;