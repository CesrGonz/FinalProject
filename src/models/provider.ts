import Product from './Product';

export default interface Provider {
  id: number;
  name: string;
  description?: string;
  direction?: string;
  phone?: string;
  email?: string;
  active: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  products: Product[];
}