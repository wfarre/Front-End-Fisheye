/**
 * checkMyLikes() 
 * when we click on one like, it add or remove one like in the counter 
 * */
const checkMyLikes = () => {
    const likes = document.querySelectorAll(".likes");
    // console.log("hello");

    likes.forEach(like => {
        like.addEventListener("click", () => {
            let picLikeCounter = parseInt(like.querySelector(".like-counter").innerHTML);
            const picId = parseInt(like.parentElement.id);

        
            console.log(pictureDataArray);
            pictureDataArray.forEach(pic => {
                // console.log(pic.title);
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

            // if (like.getAttribute("checked") === "true") {
            //     like.setAttribute("checked", false);
            //     like.querySelector(".like-logo").classList.remove("byebye-heart");

            //     picLikeCounter -= 1;
            //     totalLikes -= 1;
            // } else {
            //     like.setAttribute("checked", true);
            //     like.querySelector(".like-logo").classList.add("byebye-heart");

            //     picLikeCounter += 1
            //     totalLikes += 1;
            // }

            like.querySelector(".like-counter").innerHTML = picLikeCounter;
            getMyTotalLikes()
        });
    });

}

/** 
 * getMyTotalLikes()
 * calculate the total of likes in the entire page 
 * */
const getMyTotalLikes = () => {
    totalLikes = 0;
    const likeCounters = document.querySelectorAll(".like-counter");
    pictureDataArray.forEach(pic =>{
        totalLikes += pic.likes;
    })

    // likeCounters.forEach(likeCounter => {
    //     likeCounter = parseInt(likeCounter.innerHTML);
    //     totalLikes += likeCounter;
    // });

    const totalLikeDOM = document.querySelector(".like-quantity");
    totalLikeDOM.innerHTML = totalLikes;
}