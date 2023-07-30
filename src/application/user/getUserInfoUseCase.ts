import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";





export class GetUserInfoUseCase{

    constructor(private readonly userRepository: UserRepository){}
     
    run = async(username: string): Promise<User | null>  => {
        const user = await this.userRepository.getByUsername(username);

        if(!user) return null;

        return user;
    }
}