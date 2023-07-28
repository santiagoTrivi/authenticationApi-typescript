import { UserRepository } from "../userRepository";



export class ExistUserByUsername{
    constructor(private readonly userRepository: UserRepository){}

    async run(username: string): Promise<boolean>{
        const user = await this.userRepository.getByUsername(username);

        if(!user) return false;
        
        return true;
    }
}


export class ExistUserByEmail{
    constructor(private readonly userRepository: UserRepository){}

    async run(email: string): Promise<boolean>{
        const user = await this.userRepository.getByEmail(email);

        if(!user) return false;
        
        return true;
    }
}