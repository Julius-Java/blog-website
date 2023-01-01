exports.postChecker = (posts, postName) => {
    posts.forEach((post) => {
        if (post.postHeading === postName) {
            console.log("Match found!");
        } else {
            console.log("Not found!");
        }
    })
}