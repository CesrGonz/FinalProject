import React from 'react';
import backgroundImage from '../assets/homePage.jpg'; // Asegúrate de ajustar la ruta según tu estructura de proyecto
import { useNavigate } from 'react-router-dom';



const Home: React.FC = () => {
  const navigate = useNavigate();

const handleClickLogin = () =>{
  navigate('/login')
}

const handleClickRegister = () =>{
  navigate('/register')
}

  return (
    <div
      className="relative inset-0 bg-black w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`,fontFamily: 'Manrope, sans-serif'  }}
    >
      <div className="rounded-1xl bg-opacity-50 flex flex-col items-center justify-center p-8">
        <div className="bg-opacity-75 rounded-lg shadow-lg text-center mb-4">
          <h1 className="bg-amber-100 p-5 text-5xl font-bold text-black">Bienvenido a Invcontrol</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold p-3 bg-amber-50 text-black">Una app para llevar control tus items <br/> y venderlos cuando quieras</h1>
          <div className='flex space-x-4 items-center justify-center m-5'>
          <button className='p-3 bg-amber-300 hover:bg-amber-700' onClick={handleClickLogin} >Logeate</button>
          <button className='p-3 bg-amber-300 hover:bg-amber-700' onClick={handleClickRegister}>Registrate</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;