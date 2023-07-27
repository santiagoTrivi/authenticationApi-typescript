import { User } from "../domain/userEntity";
import { UserRepository } from "../domain/userRepository";
import { UserModel } from "./userModel";


export class MongodbUserRepository implements UserRepository{
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async getByUsername(username: string): Promise<User | null> {
        
        const user = await UserModel.findOne({username});

        if(!user) return null;

        const usertarget: User ={
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password ?? ''
        }

        return usertarget;

    }
    getByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async save(user: User): Promise<User> {
        
        const newUser = new UserModel(user);
        await newUser.save();

        const createdUser: User = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password ?? ''
        }

        return createdUser;

    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}