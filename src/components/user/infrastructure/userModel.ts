import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Provider, ProviderModel } from "../../provider/infrastructure/providerModel";


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

    @prop({ref: () => ProviderModel})
    public provider: Ref< Provider >;
}


export const  UserModel = getModelForClass(User);