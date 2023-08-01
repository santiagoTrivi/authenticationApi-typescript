import { Response } from "express";
import { IErrorReponse, ISuccessResponse } from "../../domain/serverResponse/serverResponseEntity";


export const successResponse = (res: Response, response: ISuccessResponse) => {

    res
    .status(response.status_code)
    .json({ response})
}

export const errorResponse = (res: Response, response: IErrorReponse) => {

    res
    .status(response.status_code)
    .json({response})
}