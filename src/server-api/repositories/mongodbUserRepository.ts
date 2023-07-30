import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";
import { ProviderModel } from "../ormModel/providerModel";
import { UserModel } from "../ormModel/userModel";


export class MongodbUserRepository implements UserRepository{
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async getByUsername(username: string): Promise<User | null> {
        
        const user = await UserModel.findOne({username});

        if(!user) return null;

        const usertarget: User ={
            user_id: user.id,
            username: user.username,
            email: user.email,
            password: user.password ?? '',
            birthdate: user.birthdate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt

        }

        return usertarget;

    }
    async getByEmail(email: string): Promise<User> {

        const user = await UserModel.findOne({email});

        if(!user) return null;

        const usertarget: User ={
            user_id: user.id,
            username: user.username,
            email: user.email,
            password: user.password ?? '',
            birthdate: user.birthdate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }

        return usertarget;

    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    async save(user: User): Promise<User> {
        
        const provider = user.provider;

        const target = await ProviderModel.findOne({provider});

        user.provider = target.id;

        const newUser = new UserModel(user);

        await newUser.save();

        const createdUser: User = {
            user_id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password ?? '',
            birthdate: newUser.birthdate
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