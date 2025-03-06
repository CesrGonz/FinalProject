import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/user.Service';
import { AuthService } from '../services/auth.Service';
import User from '../models/User';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = AuthService.getUserIdFromToken();
        const users = await getUsers();
        const currentUser = users.find((user: User) => user.id === userId);
        if (!currentUser) {
          throw new Error('Usuario no encontrado');
        }

        setUser(currentUser);
      } catch (error) {
        console.error('Error al cargar el perfil del usuario:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div className="relative inset-0 w-full bg-gray-100 flex items-center justify-center min-h-screen p-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="flex flex-col items-center justify-center m-10 mx-auto w-full rounded-lg sm:max-w-md xl:p-0">
        <div className="p-2 space-y-4 md:space-y-6 sm:p-8 text-black dark:bg-amber-100 rounded-2xl">
          <h1 className="text-xl font-bold leading-tight text-black md:text-2xl text-center">
            Perfil de Usuario
          </h1>
          <div className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-black">Nombre</label>
              <p className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5">
                {user.name}
              </p>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-black">Email</label>
              <p className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5">
                {user.email}
              </p>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-black">Rol</label>
              <p className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;