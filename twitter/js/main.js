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
            return composeTemplate({

            })

    }

    var threadTemplate = Handlebars.compile($('#template-thread').html())
        function renderThread(user, message){
            renderThread({
            renderTweet: tweetTemplate(user, message)
        })
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
        event.preventDefault();
        var message = $(this).find('textarea').val()
        console.log(message)


        if ($(this).is('header > .compose')) {
            $('.tweets').append(renderTweet(user, message)).addClass('thread')
            $('textarea').val('')
        } else {
            $(this).append(renderTweet(user, message))
        }

//going to parent, selecting child of thread and appending to that.

        // if ($(this).parents('header').length) {
        //     console.log('Were making a thread')
        // } else {
        //     $(this).parents('.replies').append(renderTweet(user, message))
        // }
        // return false;
    })

    $('main').on('click', '.compose', function(){
        $(this).toggleClass('expand')

    })

    $('main').on('click', '.thread', function(){
        $(this).addClass('expand')

    })
//I WILL GET YOU RIGHT BEFORE I LEAVE GODDAMNIT!!!11one
    $(this).on('click', '.thread.expand', function(){
        $(this).toggleClass('replies')
    })
});
