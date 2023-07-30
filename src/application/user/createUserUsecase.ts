import { UnathorizedError } from "../../domain/common/exceptions/UnauthorizedError";
import { ExistUserByEmail, ExistUserByUsername } from "../../domain/user/services/existsUserByUsername";
import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";




export class CreateUserUseCase{
    
    private readonly userRepository: UserRepository;
    private readonly existUserByUsername: ExistUserByUsername;
    private readonly exisUserByEmail: ExistUserByEmail;

    constructor(userRepo: UserRepository){
        this.userRepository = userRepo;
        this.existUserByUsername = new ExistUserByUsername(userRepo);
        this.exisUserByEmail = new ExistUserByEmail(userRepo);
    }

    run = async (data: User) =>{
        const existUsername = await this.existUserByUsername.run(data.username);
        const existUserEmail = await this.exisUserByEmail.run(data.email);

        if(existUsername) throw new UnathorizedError('Username already registered', 'username');
        
        if(existUserEmail) throw new UnathorizedError('Email already registered', 'email');

        const newUser = await this.userRepository.save(data);

        return newUser;
    }

}