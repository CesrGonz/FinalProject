const URL_BASE = import.meta.env.VITE_API_URL_BASE

export const getUsers = async () => {
    try {
        const response = await fetch(URL_BASE + '/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
    
        if (!response.ok) {
          throw new Error('Fallo al obtener los usuarios');
        }
        const data = await response.json();

        if (!data.users || !Array.isArray(data.users)) {
            throw new Error('La respuesta no contiene un array de usuarios');
          }
      
          return data.users;
    
     
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido';
        throw new Error(msg);
    
}}