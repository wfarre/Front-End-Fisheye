import Photography from "../models/Photography.js";

/**
 *Constructor Factory for the media.
 *   
 * */
export default class MediaFactory{
    constructor(data, type){
        if(type === "json"){
            return new Photography(data);
        }
    }
}