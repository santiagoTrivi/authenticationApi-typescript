import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../network/serverResponse";
import { ErrorServer } from "../../components/common/domain/ErrorServeer";




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