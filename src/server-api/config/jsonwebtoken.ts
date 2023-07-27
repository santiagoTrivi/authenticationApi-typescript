import jwt from "jsonwebtoken";
import { config } from "./config";


const jwt_key = config.JWT;

export default class Jsonwebtoken{
    
    sign = (uuid: string) => {

        return new Promise( (resolve, reject)=>{
            const payload = {uuid};
            jwt.sign(payload, jwt_key.JWT_PRIVATE_KEY, {expiresIn: '5h'}, (err, token)=>{
                if(err){
                    console.log(err);
                    reject('the token could not be generaterd');
                }else{
                    resolve(token);
                }
            });
        });
    }

   verify = () => {
        
   }
}