class Photography {
    constructor(data) {
        this._id = data.media.id
        this._photographerId = data.media.photographerId
        this._title = data.media.title
        this._image = data.media.image
        this._video = data.media.video
        this._likes = data.media.likes
        this._date = data.media.date
        this._price = data.media.price
        this._photographerName = data.photographerName
    }

    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
    }

    get image() {
        return `./assets/pictures/${this._photographerName}/${this._image}`
    }

    get video() {
        return `./assets/pictures/${this._photographerName}/${this._video}`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }

    get media() {
        return this._video ? `./assets/pictures/${this._photographerName}/${this._video}` : `./assets/pictures/${this._photographerName}/${this._image}`;
    }

}