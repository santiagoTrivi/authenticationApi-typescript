import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";



export class Provider extends TimeStamps{

    public id: string;

    @prop({required: true})
    public provider_id: string;

    @prop({required: true})
    public provider: string;
}

export const ProviderModel = getModelForClass( Provider );