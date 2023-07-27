import { UnathorizedError } from "../../common/domain/exceptions/UnauthorizedError";
import { ExistUserByUsername } from "../domain/services/existsUserByUsername";
import { User } from "../domain/userEntity";
import { UserRepository } from "../domain/userRepository";



export class CreateUserUseCase{
    
    private readonly userRepository: UserRepository;
    private readonly existUserBtyUsername: ExistUserByUsername;

    constructor(userRepo: UserRepository){
        this.userRepository = userRepo;
        this.existUserBtyUsername = new ExistUserByUsername(userRepo);
    }

    run = async (data: User) =>{
        const existUsername = await this.existUserBtyUsername.run(data.username);

        if(existUsername) throw new UnathorizedError('Username already registered', 'username');

        const newUser = await this.userRepository.save(data);

        return newUser;
    }

}