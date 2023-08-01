import { model } from "mongoose";
import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";
import { ProviderModel } from "../ormModel/providerModel";
import { UserModel } from "../ormModel/userModel";


export class MongodbUserRepository implements UserRepository{

    async getById(id: string): Promise<User> {

        const user = await UserModel.findOne({user_id: id}).populate({
            path: 'provider', 
            model: ProviderModel, 
            select: {
                provider: 1, 
                _id: 0
            }
        });
        

        if(!user) return null;

        const usertarget: User ={
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            password: user.password ?? '',
            provider: user.provider,
            birthdate: user.birthdate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt

        }

        return usertarget;
    }
    async getByUsername(username: string): Promise<User | null> {
        
        const user = await UserModel.findOne({username});

        if(!user) return null;

        const usertarget: User ={
            user_id: user.user_id,
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
            user_id: user.user_id,
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
            user_id: newUser.user_id,
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