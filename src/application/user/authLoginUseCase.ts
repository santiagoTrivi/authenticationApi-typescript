import { BadRequestError } from "../../domain/common/exceptions/BabRequestError";
import { Auth } from "../../domain/user/authEntity";
import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";
import { GetUserInfoUseCase } from "./getUserInfoUseCase";




export class AuthLoginUseCase{


    private readonly getUserInfo: GetUserInfoUseCase;

    constructor(
        private readonly userRepo: UserRepository,
        ){
        this.getUserInfo = new GetUserInfoUseCase(this.userRepo);

    }

    run = async(data: Auth): Promise<User> => {
        
        const user = await this.getUserInfo.run(data.username);

        if(!user) throw new BadRequestError('User not found', 'not found');

        return user;
    }

}