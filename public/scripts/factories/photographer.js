import Photography from "../models/Photography.js";
import Photographer from "../models/Photographer.js";



export default class PhotographerFactory3 {
    constructor(data, type) {
        if (type === "media") {
            return new Photography(data);
        }
        if (type === "photographer") {
            return new Photographer(data);
        }
    }
}