import { jwtDecode } from "jwt-decode";
import User from "../models/User";
import { fetchAPI } from "../utils/FetchAPI";

//const URL_BASE = 'http://localhost:3000/api/'
const API_URL_BASE = import.meta.env.VITE_API_URL_BASE

export class AuthService {
    static async registerUser(user: Partial<User>) {
        return await fetchAPI(API_URL_BASE+'/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
    }

    static async loginUser(email: string, password: string) {
        try {
            const data = await fetchAPI(API_URL_BASE + '/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password }),
              credentials: 'include'
            });
      
            if (!data.token) {
              throw new Error('Token no encontrado en la respuesta');
            }
      
            localStorage.setItem('token', data.token); // Almacenar el token en localStorage
            return data;
          } catch (error) {
            console.error('Error al iniciar sesión:', error);
            throw error;
          }
  } 

  static async logout() {
    try {
      await fetchAPI(API_URL_BASE+'/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      localStorage.removeItem('token'); // Eliminar el token del localStorage
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }


    static getUserIdFromToken() {
        const token = localStorage.getItem('token');
        if(!token) throw new Error('No token found');


        const decoded: {id:number} = jwtDecode(token);
        return decoded.id;
        }
}