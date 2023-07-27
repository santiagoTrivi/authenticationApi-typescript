import { User } from "./userEntity";

export interface UserRepository{
    getById(id: string):Promise<User | null>;
    getByUsername(username: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    getAll(): Promise<User[]>
    save(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(user: User): Promise<void>;
}