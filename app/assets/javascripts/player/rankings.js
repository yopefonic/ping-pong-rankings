var PingPong = PingPong || {};
PingPong.initRankings = function() {
    all_tabs = '#nav-ranking, #nav-possibility-matrix, #nav-history-graph, #nav-recent-games, #nav-player-edit';
    all_content = '#ranking, #possibility-matrix, #history-graph, #player-edit, #recent-games, #new-game, #rankings, #new-player';
    all_nav = '#nav-rankings, #nav-newgame, #nav-newplayer';

    // Navigation
    $('.nav a').click(function(e) {
        if ($(this).parent().attr('id') == 'nav-login') {
            return;
        }

        e.preventDefault();
        var elmParent = $(this).parent();
        if(elmParent.hasClass('nav-item')){
            $('.nav a').removeClass('active');
            $(this).addClass('active');
            $('.nav-view').addClass('hide');
            $('#'+$(this).attr('data-content')).removeClass('hide');
        } if(elmParent.attr('id') == 'nav-newgame'){
            showNewGame()
        } else if(elmParent.attr('id') == 'nav-fullscreen'){
            switchFullscreen()
        }
    });

    // Keypress 'N' for new game
    $(document).keydown(function(e) {
        if(e.keyCode == 78) {
            if (e.target.tagName.toUpperCase() == 'INPUT') return;
            $('#nav-newgame a').click(showNewGame());
        }
    });

    $('#nav-recent-games a').click(function(e) {
        e.preventDefault();
        $(all_tabs).removeClass('active');
        $('#nav-recent-games').addClass('active');
        $(all_content).addClass('hide');
        $('#rankings, #recent-games').removeClass('hide');
    })

    $('#nav-player-edit a').click(function(e) {
        e.preventDefault();
        $(all_tabs).removeClass('active');
        $('#nav-player-edit').addClass('active');
        $(all_content + ', #recent-games').addClass('hide');
        $('#player-edit').removeClass('hide');
    })

    // Animation for adding 'new game'
    function showNewGame(){
        var elm = $('#new-game')
        if(elm.hasClass('hide')){
            var new_height = $('.navbar').height();
            new_height = new_height + 'px';
            elm.removeClass('hide');
            elm.animate({marginTop:new_height}, 500);
        } else {
            elm.animate({marginTop:'-1000px'}, 500, function(){;
                elm.addClass('hide');
            });
        }
    }
    // Switch full screen
    function switchFullscreen(){
        var elm = $('.container');
        elm.toggleClass('fullscreen');
    }
};
