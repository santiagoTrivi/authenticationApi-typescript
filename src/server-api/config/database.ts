import mongoose from "mongoose"
import { config } from "./config";

const mongodbHandle = config.mongo;

export const mongodb = async () => {
    try {

        await mongoose.connect(mongodbHandle.url);
        console.log('mongodb connected');
        
    } catch (error) {
        console.log(error);
        console.log('mongodb connecxion failed');

    }
}