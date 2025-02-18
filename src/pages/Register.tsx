import React, { ChangeEvent, FormEvent, useState } from 'react';
import backgroundImage from '../assets/bg-login.jpg'

const Register: React.FC =() => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Se envió el formulario", form.email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div
    className="relative inset-0 bg-black w-full  bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-2 space-y-4 md:space-y-6 sm:p-8 text-black dark:bg-amber-100 rounded-2xl">
        <h1 className="text-xl font-bold leading-tight text-black md:text-2xl">
          Crea tu cuenta
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Your email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-black">
              Repite tu contraseña
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-black">
                I accept the <a className="font-medium text-black hover:underline" href="#">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Create account
          </button>
        </form>
      </div>
     </div>
    </div>
  );
}

export default Register;