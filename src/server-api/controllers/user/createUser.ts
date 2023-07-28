import { NextFunction, Request, Response } from "express";
import { MongodbUserRepository } from "../../../components/user/infrastructure/mongodbUserRepository";
import { CreateUserUseCase } from "../../../components/user/application/createUserUsecase";
import { User } from "../../../components/user/domain/userEntity";
import { uuid } from "uuidv4";
import bcrypt from "bcrypt";
import { successResponse } from "../../network/serverResponse";
import { config, singjwtoken } from "../../config";



const monngoUserRepository = new MongodbUserRepository();
const createUserUsecase = new CreateUserUseCase(monngoUserRepository);
const usedProvider = config.PROVIDERS;


export const createUser = async(req: Request, res: Response, next: NextFunction) => {

    let {username, email, password, birtdate} = req.body;

    const salt = bcrypt.genSaltSync();

    password = bcrypt.hashSync(password, salt);

    const newUser: User = {
        user_id: uuid(),
        username: username,
        email: email,
        password: password,
        birtdate: birtdate,
        provider: usedProvider.local
    }

    try {

        const user = await createUserUsecase.run(newUser);

        const accesstoken = await singjwtoken(user.user_id);
        res.cookie('accesstoken',accesstoken, { maxAge: 10800, httpOnly: true });
        
        return successResponse(res, {
            message: "user created", 
            results: {user, accesstoken}, 
            status_code: 201, 
            success: true
        })

    } catch (error) {
        next(error);
    }

}