import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../lib/serverResponse";
import jwt from "jsonwebtoken";
import { config } from "../config";


const jwt_key = config.JWT;



export const verifyAccessToken = async(req: Request, res: Response, next: NextFunction) => {

    let token = req.headers['accesstoken'];

    
    if(!token){
        return errorResponse(res, {
            message: 'Access token required',
            success: false,
            status_code: 401
        });
    }
    
    token = String(token);

    try {

        jwt.verify(token, jwt_key.JWT_PRIVATE_KEY);
        next();
    } catch (error) {

        console.log(error);
        return errorResponse(res, {
            message: 'access token not valid',
            success: false,
            status_code: 401,
            errors: error.message
        });
    }
    
}