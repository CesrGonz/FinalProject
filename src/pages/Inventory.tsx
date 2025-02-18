import React, { useState, ChangeEvent, FormEvent } from 'react';

const Inventory: React.FC = () => {
  const [form, setForm] = useState({ productName: '', quantity: '', supplier: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Producto añadido:', form);
    // Aquí puedes añadir la lógica para manejar el producto añadido
    setForm({ productName: '', quantity: '', supplier: '' }); // Limpiar el formulario después de enviar
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
      <div className="p-2 space-y-4 md:space-y-6 sm:p-8 text-black dark:bg-amber-100 rounded-xl">
        <h1 className="text-2xl font-bold leading-tight text-black md:text-2xl text-center">
          Añadir Producto
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName" className="block mb-2 text-sm font-medium text-black">
              Nombre del Producto
            </label>
            <input
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nombre del Producto"
              required
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-black">
              Cantidad
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Cantidad"
              required
            />
          </div>
          <div>
            <label htmlFor="supplier" className="block mb-2 text-sm font-medium text-black">
              Proveedor
            </label>
            <input
              type="text"
              name="supplier"
              value={form.supplier}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Proveedor"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Añadir Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;