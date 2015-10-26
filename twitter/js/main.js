$(function(){

    var user = {
        handle: '@bradwestfall',
        img: 'images/brad.png'
    }

    var makeForm = function renderCompose() {
		var source   = $("#template-compose").html();
		var template = Handlebars.compile(source);
		var context = {};
		var html    = template(context);
		return html;
	}

    var makeThread = function renderThread(user, message, image) {
		var source   = $("#template-thread").html();
		var template = Handlebars.compile(source);
		var context = {
			'tweet': makeTweet(user, message, image),
			'compose': makeForm()
		};
		var thread = template(context);
		return thread;
	}

    var makeTweet = function renderTweet(user, message, image) {
		var source   = $("#template-tweet").html();
		var template = Handlebars.compile(source);
		var context = {User: user, message: message, image: image};
		var tweet    = template(context);
		return tweet;
	}

    $(document).on('submit', 'form', function(event){
		event.preventDefault();
		var message = $(this).find('textarea').val();
		if($(this).is('header > form')) {
			$(".tweets").prepend(makeThread(user.handle, message, user.img));
			$(this).find('textarea').val('');
		} else {
			$(this).parents('.replies').append(makeTweet(user.handle, message, user.img));
			$(this).find('textarea').val('');
		}
	});

    $(document).on('click', 'textarea', function(){
        $(this).parents('.compose').toggleClass('expand')

    })

    $(document).on('click', '.tweet', function(){
        $(this).parents('.thread').toggleClass('expand')

    })

});
