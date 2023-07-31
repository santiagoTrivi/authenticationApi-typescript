import { NextFunction, Request, Response } from "express";
import { ErrorServer } from "../../domain/common/ErrorServeer";
import { errorResponse } from "../lib";





export const errorHanddle = (error: Error, req: Request, res: Response, next: NextFunction) => {

    if(error instanceof ErrorServer){
        return errorResponse(res, {
            message: error.message,
            success: false,
            status_code: error.errorCode,
        });

    }else{
        console.log(error);
        return errorResponse(res, {
            message: 'server error',
            success: false,
            status_code: 500,
            errors: error.message
        });
    }

}