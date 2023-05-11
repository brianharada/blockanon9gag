function removeAnonPosts() {
    var test = $('#list-view-2').find('.ui-post-creator__author');
    test.each(function(i) {
        try {
            var shouldDeletePost = false;
            var namesToRemove = ['9gagger'];
            for (var prop in namesToRemove) {
                try { shouldDeletePost = test[i].text.toLowerCase().match(namesToRemove[prop])[0] } catch (e) {}
            }
        } catch (err) {
            shouldDeletePost = false;
        }

        if (shouldDeletePost) {
            test[i].closest('article').remove();
        }
    })
}

removeAnonPosts()

var scrollCounter = 0;
window.addEventListener('scroll', (event) => {
    if (scrollCounter > 50) {
        removeAnonPosts();
        scrollCounter = 0;
    } else {
        scrollCounter++;
    }
});