import { GetAuthenticatedUser } from "../../application/user/getAuthenticatedUserUseCase";
import { User } from "../../domain/user/userEntity";
import { UserRepository } from "../../domain/user/userRepository";





export class UserController{

    private  getauthenticatedUser: GetAuthenticatedUser;

    constructor(userRepository: UserRepository){
        this.getauthenticatedUser = new GetAuthenticatedUser(userRepository);
    }

    public getUserByid = async(id: string): Promise<User> =>{

        const user = await this.getauthenticatedUser.run(id);

        const {password, ... authenticatedUser} = user;

        return authenticatedUser;
    }

}