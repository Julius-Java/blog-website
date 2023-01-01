exports.postChecker = (posts, postName) => {
    posts.forEach((post) => {
        if (post.postHeading === postName) {
            return "Match found!";
        } else {
            return "Not found!";
        }
    })
}