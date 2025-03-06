const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
import { fetchAPI } from "../utils/FetchAPI"
import Product from "../models/Product"


export class ProductService{

    static async search(title?: string) {
        let url = API_URL_BASE+'/offers?'
        if(title) url += 'title='+title

        return await fetchAPI(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    static async getById(id:number) {
        return await fetchAPI(API_URL_BASE+'/products/'+id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

    
    static async getAll() {
        return await fetchAPI(API_URL_BASE+'/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }


    static async create(offer: Partial<Product>) {
        return await fetchAPI(API_URL_BASE+'/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(offer),
            credentials: 'include'
        })
    }

    static async update(id:number, offer: Partial<Product>) {
        return await fetchAPI(API_URL_BASE+'/products/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(offer),
            credentials: 'include'
        })
    }
    static async delete(id: number){
        return await fetchAPI(API_URL_BASE+'/products/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }
}