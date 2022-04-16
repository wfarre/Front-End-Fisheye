/**
 * checkMyLikes() 
 * when we click on one like, it add or remove one like in the counter 
 * */
const checkMyLikes = (pictureArray) => {
    const likes = document.querySelectorAll(".likes");

    likes.forEach(like => {
        like.addEventListener("click", () => {
            let picLikeCounter = parseInt(like.querySelector(".like-counter").innerHTML);
            const picId = parseInt(like.parentElement.id);

            pictureArray.forEach(pic => {
                if (pic.id === picId) {
                    console.log("picId");
                    if (like.getAttribute("checked") === "true") {
                        like.setAttribute("checked", false);
                        like.querySelector(".like-logo").classList.remove("byebye-heart");

                        picLikeCounter -= 1;

                        return pic.likes -= 1;
                    } else {
                        like.setAttribute("checked", true);
                        like.querySelector(".like-logo").classList.add("byebye-heart");

                        picLikeCounter += 1;


                        return pic.likes += 1;
                    }

                }
            })

            like.querySelector(".like-counter").innerHTML = picLikeCounter;
            getMyTotalLikes()
        });
    });

}

/** 
 * getMyTotalLikes()
 * calculate the total of likes in the entire page 
 * */
const getMyTotalLikes = (pictureArray) => {
    let totalLikes = 0;
    pictureArray.forEach(pic => {
        totalLikes += pic.likes;
    })

    const totalLikeDOM = document.querySelector(".like-quantity");
    totalLikeDOM.innerHTML = totalLikes;
}


export {checkMyLikes, getMyTotalLikes};