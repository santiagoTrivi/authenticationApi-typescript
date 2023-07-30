export interface User {
    user_id: string;
    username: string;
    email: string;
    password?: string;
    birthdate?: Date;
    provider?: any;
    createdAt?: Date;
    updatedAt?: Date;
}
