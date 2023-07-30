import { ErrorServer } from "../ErrorServeer";



export class BadRequestError extends ErrorServer{
    errorCode = 400;
    errorType = 'BAD_REQUEST'
    constructor(message: string, private property: string){
        super(message)

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    errorinit(){
        return [{message: this.message, property: this.property}];
    }
    
}