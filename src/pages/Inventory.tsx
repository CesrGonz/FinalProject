import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Product from '../models/Product';
import { ProductService } from '../services/product.Service';

const Inventory: React.FC = () => {
  const [form, setForm] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    active: true,
    provider: 0,
    location: '',
    createdAt: '',
    updatedAt: '',
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await ProductService.getAll();
        setProducts(productList);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isEditing && currentProductId !== null) {
      const updatedProduct = await ProductService.update(currentProductId, form);
      console.log('Producto actualizado:', updatedProduct);
      const updatedProducts = products.map((product) =>
        product.id === currentProductId ? { ...product, ...form, updatedAt: new Date().toISOString() } : product
      );
      setProducts(updatedProducts);
      setIsEditing(false);
      setCurrentProductId(null);
    } else {
      const newProduct: Product = {
        ...form,
        id: products.length + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts([...products, newProduct]);
      try {
        const productData = await ProductService.create(newProduct);
        console.log('Producto añadido:', productData);
      } catch (error) {
        console.error('Error al añadir producto:', error);
      }
    }
    setForm({
      id: 0,
      title: '',
      description: '',
      active: true,
      provider: 0,
      location: '',
      createdAt: '',
      updatedAt: '',
    });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentProductId(null);
    setForm({
      id: 0,
      title: '',
      description: '',
      active: true,
      provider: 0,
      location: '',
      createdAt: '',
      updatedAt: '',
    });
  };

  const handleEdit = (product: Product) => {
    setForm({
      ...product,
    });
    setIsEditing(true);
    setCurrentProductId(product.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (productId: number) => {
    try{ await ProductService.delete(productId);
    const selectedProduct = products.filter((product) => product.id !== productId);
    setProducts(selectedProduct);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 p-4">
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Inventario</h1>
        <button
          onClick={openModal}
          className="mb-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Añadir Producto
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">{isEditing ? 'Modificar Producto' : 'Añadir Producto'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Título
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Título del Producto"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Descripción del Producto"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="active" className="block text-sm font-medium text-gray-700">
                    Activo
                  </label>
                  <input
                    type="checkbox"
                    name="active"
                    checked={form.active}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="provider" className="block text-sm font-medium text-gray-700">
                    Proveedor
                  </label>
                  <input
                    type="number"
                    name="provider"
                    value={form.provider}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ID del Proveedor"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ubicación del Producto"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mr-2 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {isEditing ? 'Modificar Producto' : 'Añadir Producto'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-4 w-full">
          <h2 className="text-xl font-bold mb-2">Productos Añadidos</h2>
          <ul className="space-y-2">
            {products.map((product) => (
              <li key={product.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <p><strong>Producto:</strong> {product.title}</p>
                <p><strong>Descripción:</strong> {product.description}</p>
                <p><strong>Activo:</strong> {product.active ? 'Sí' : 'No'}</p>
                <p><strong>Proveedor:</strong> {product.provider}</p>
                <p><strong>Ubicación:</strong> {product.location}</p>
                <p><strong>Creado en:</strong> {product.createdAt}</p>
                <p><strong>Actualizado en:</strong> {product.updatedAt}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Modificar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inventory;