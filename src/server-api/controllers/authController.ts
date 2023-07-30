import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { config} from "../config";
import { Post, Route, SuccessResponse, Tags } from "tsoa";
import { AuthLoginUseCase } from "../../application/user/authLoginUseCase";
import { UnathorizedError } from "../../domain/common/exceptions/UnauthorizedError";
import { UserRepository } from "../../domain/user/userRepository";
import { CreateUserUseCase } from "../../application/user/createUserUsecase";
import { User } from "../../domain/user/userEntity";
import { Auth } from "../../domain/user/authEntity";




const usedProvider = config.PROVIDERS;

@Route('/v1/auth')
@Tags('authController')
export default class AuthController{

    private createUserUsecase;
    private authloginUseCase;

    constructor(private readonly userRepository: UserRepository){
        this.createUserUsecase = new CreateUserUseCase(this.userRepository);
        this.authloginUseCase = new AuthLoginUseCase(this.userRepository);
    }
    
    @SuccessResponse('201', 'user created')
    @Post('/signup')
    signup = async( username: string, email: string, password: string, birthdate: Date): Promise<User> =>{

        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

        const newUser: User = {
            user_id: v4(),
            username,
            email,
            password,
            birthdate,
            provider: usedProvider.local
        } 

        const user = await this.createUserUsecase.run(newUser);

        return user;

    }

    login =  async(data: Auth) =>{

        const user = await this.authloginUseCase.run(data);

        const validation = bcrypt.compareSync(data.password, user.password);

        if(!validation) throw new UnathorizedError('username or password are incorrect', 'invalid data');

        const {password, ...userInfo} = user;

        return userInfo;

    }

}
