import { ErrorServer } from "../ErrorServeer";


export class UnathorizedError extends ErrorServer{

    errorCode: number = 401;
    errorType: string = 'UNATHORIZED_ERROR';

    constructor(message: string, private property: string){
        super(message);

        Object.setPrototypeOf(this, UnathorizedError.prototype);
    }

    errorinit(){
        return [{message: this.message, property: this.property}];
    }

}