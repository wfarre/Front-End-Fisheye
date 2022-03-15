const organizeByLikes = (media) => {
    // const mediaArray = media;
    mediaArray = [];

    mediaArray = media.sort((a, b) => b.likes - a.likes);
}

const organizeByTitles = (media) => {
    // const mediaArray = media;
    mediaArray = [];

    mediaArray = media.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

const organizeByDate = (media) => {
    // const mediaArray = media;
    mediaArray = [];

    mediaArray = media.sort((a, b) => new Date(b.date) - new Date(a.date));
}