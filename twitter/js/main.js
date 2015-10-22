// As a user, I should be able to
//
// Send a new tweet, which should get added to the list of tweets
// Click any top-level tweet to expand it
// See all replies to a tweet while it is expanded
// Reply to any top-level tweet
// Close/collapse an expanded top-level tweet by clicking it a second time



//i need to see what the markup of a new tweet looks like, and then create the appropriate template for it

//i need to create the set of instructions necessary in order to write the markup to the DOM.

$(function(){


    var user = {
        handle: '@bradwestfall',
        img: 'images/brad.png'
    }



    var composeTemplate = Handlebars.compile($('#template-compose').html())

        function renderCompose(){
            return composeTemplate()

    }

//The renderThread function takes some more thought. It will need to call off to the other two render functions to get its contents, then it will take those "sub templates" and build them into the thread template. Even though renderThread won't use the user and message values directly, it will need to pass those along to the renderTweet.

    var threadTemplate = Handlebars.compile($('#template-thread').html())

        function renderThread(user, message){
            return renderThread()

    }

    var tweetTemplate = Handlebars.compile($('#template-tweet').html())

    function renderTweet(user, message){
        return tweetTemplate({
            userImage: user.img,
            userHandle: user.handle,
            userMessage: message
        })
    }

    $('main').on('submit', '.compose', function(){
        var message = $(this).find('textarea').val()

        if ($(this).parents('header').length) {
            console.log('Were making a thread')
        } else {
            $(this).parents('.replies').append(renderTweet(user, message))
        }
        return false;
    })

    $('main').on('click', '.compose', function(){
        $(this).addClass('expand')

    })

    $('main').on('click', '.thread', function(){
        $(this).addClass('expand')

    })
});
