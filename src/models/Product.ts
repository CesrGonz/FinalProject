export default interface Product {
  id: number;
  title: string;
  description?: string;
  active: boolean;
  provider: number;
  location?: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}