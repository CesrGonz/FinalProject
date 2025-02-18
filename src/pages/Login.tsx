import React, { useState } from 'react';  
import backgroundImage from '../assets/bg-login.jpg'

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
    className="relative inset-0 bg-black w-full  bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="flex flex-col items-center justify-center m-10 mx-auto md:h-screen lg:py-0 w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-2 space-y-4 md:space-y-6 sm:p-8 text-black dark:bg-amber-100 rounded-2xl">
        <h1 className="text-xl font-bold leading-tight text-black md:text-2xl">
          Accede con tu cuenta
        </h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Tu email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="nombre@correo.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Tu contraseña
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-black">
              Recuérdame
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;