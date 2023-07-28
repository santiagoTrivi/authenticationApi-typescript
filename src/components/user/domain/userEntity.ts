export interface User {
    user_id: string;
    username: string;
    email: string;
    password?: string;
    birtdate?: string;
    provider?: any;
    createdAt?: string;
    updatedAt?: string;
}
