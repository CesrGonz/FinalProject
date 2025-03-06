export default interface User{
  
        id: number;
        name: string;
        surname?: string;
        email: string;
        role?: string;
        active: boolean;
        accepNotifications: boolean;
        createdAt: string;
        updatedAt: string;
     
}