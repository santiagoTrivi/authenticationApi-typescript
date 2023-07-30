import jwt from "jsonwebtoken";
import { config } from "../config/config";


const jwt_key = config.JWT;


    
export const singjwtoken = (uuid: string) => {

    return new Promise( (resolve, reject)=>{
        const payload = {uuid};
        jwt.sign(payload, jwt_key.JWT_PRIVATE_KEY, {expiresIn: '3h'}, (err, token)=>{
            if(err){
                console.log(err);
                reject('the token could not be generaterd');
            }else{
                resolve(token);
            }
        });
    });
}

