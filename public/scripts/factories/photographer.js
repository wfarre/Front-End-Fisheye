import Photographer from "../models/Photographer.js";


/**
 *Constructor Factory for the photographer
 *   
 * */
export default class PhotographerFactory{
    constructor(data, type){
        if(type === "json"){
            return new Photographer(data);
        }
    }
}
