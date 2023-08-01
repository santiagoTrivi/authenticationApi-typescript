import { BadRequestError } from "../../domain/common/exceptions/BabRequestError";
import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";



export class GetAuthenticatedUser{

    constructor(private readonly userRepository: UserRepository){

    }
    
    public run = async(id: string): Promise<User> => {
        const user = await this.userRepository.getById(id);

        if(!user) throw new BadRequestError('User not found', 'not found');

        return user;
    }

}