export interface User {
    id: string;
    username: string;
    email: string;
    password?: string;
    birtdate?: string;
    provider?: any;
    createdAt?: string;
    updatedAt?: string;
}
