import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { config} from "../config";
import { AuthLoginUseCase } from "../../application/user/authLoginUseCase";
import { UnathorizedError } from "../../domain/common/exceptions/UnauthorizedError";
import { UserRepository } from "../../domain/user/userRepository";
import { CreateUserUseCase } from "../../application/user/createUserUsecase";
import { User } from "../../domain/user/userEntity";
import { Auth } from "../../domain/user/authEntity";
import { GetUserInfoUseCase } from "../../application/user/getUserInfoUseCase";




const usedProvider = config.PROVIDERS;


export default class AuthController{

    private createUserUsecase;
    private authloginUseCase;
    private getUserInfoUseCase;

    constructor(private readonly userRepository: UserRepository){
        this.createUserUsecase = new CreateUserUseCase(this.userRepository);
        this.authloginUseCase = new AuthLoginUseCase(this.userRepository);
        this.getUserInfoUseCase = new GetUserInfoUseCase(this.userRepository);
    }
    
   
    /**
     *  User signup controller
     * @param username { string }
     * @param email { string }
     * @param password { string }
     * @param birthdate  { Date }
     * @returns { User }
     */
    public signup = async( username: string, email: string, password: string, birthdate: Date): Promise<User> =>{

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
    /**
     * User login controller
     * @param data {Auth}
     * @returns {User}
     */
    public login =  async(data: Auth): Promise<User> =>{

        const user = await this.authloginUseCase.run(data);

        const validation = bcrypt.compareSync(data.password, user.password);

        if(!validation) throw new UnathorizedError('username or password are incorrect', 'invalid data');

        const {password, ...userInfo} = user;

        return userInfo;

    }

    /**
     * Oauth2 by google implementation controller
     * @param email {string}
     * @returns {User}
     */
    public oauth2ByGoogle = async(email: string): Promise<User> => {

        const user = await this.getUserInfoUseCase.run(email);

        if(user){
            const {password, ...userInfo} = user;
            return userInfo;
        }

        const newUser: User = {
            user_id: v4(),
            username: email.split('@')[0],
            email,
            provider: usedProvider.google
        } 

        const createdUser = await this.createUserUsecase.run(newUser);

        return createdUser;

    }

}
