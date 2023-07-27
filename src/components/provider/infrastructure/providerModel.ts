import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";



class Provider extends TimeStamps{

    @prop({required: true})
    public id: string;

    @prop({required: true})
    public provider: string;
}

export const ProviderModel = getModelForClass( Provider );