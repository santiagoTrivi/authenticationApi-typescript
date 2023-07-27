


export interface ISuccessResponse {
    message: string,
    success: boolean,
    status_code: number,
    results?: any
}

export interface IErrorReponse {
    message: string,
    success: boolean,
    status_code: number,
    errors?: any
}