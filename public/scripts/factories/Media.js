import Photography from "../models/Photography.js";


export default class MediaFactory{
    constructor(data, type){
        if(type === "json"){
            return new Photography(data);
        }
    }
}