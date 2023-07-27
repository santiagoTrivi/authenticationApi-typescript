


export abstract class ErrorServer extends Error{
    abstract errorCode: number;
    abstract errorType: string;

    constructor(message: string, property?: string){
        super(message)

        Object.setPrototypeOf(this, ErrorServer.prototype)
    }

    abstract errorinit(): {message: string; property?: string}[];
}