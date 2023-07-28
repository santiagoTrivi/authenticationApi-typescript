import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { errorResponse } from "../network/serverResponse";




export const clientInputValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction)=> {

    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        })
        next();
    } catch (error) {
        
        if(error instanceof ZodError){

            const messages = error.issues.map((issue) => ({messages: issue.message}));

            return errorResponse(res, {
                message: "Data misssing",
                success: false,
                status_code: 400,
                errors: messages
            });
    
        }else{

            console.log(error);

            return errorResponse(res, {
                message: 'server error',
                success: false,
                status_code: 500,
            });

        }

    }

}