import { prop, getModelForClass } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";


class User extends TimeStamps{

    @prop({required: false})
    public id: string;

    @prop({required: false})
    public username: string;

    @prop({required: false})
    public email: string;

    @prop({required: false})
    public password: string;
    
    @prop({required: false})
    public birthdate: Date;
}


export const  UserModel = getModelForClass(User);