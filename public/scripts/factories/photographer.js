class PhotographerFactory3 {
    constructor(data, type) {
        if (type === "media") {
            return new Photography(data);
        }
        if (type === "photographer") {
            return new Photographer(data);
        }
    }
}