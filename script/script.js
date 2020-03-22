var visible = false;
function login_visible(){
    if(visible){
        document.getElementById('login-notvisible').style.display = 'none';
        visible = false
    }
    else{
        document.getElementById('login-notvisible').style.display = 'block';
        visible = true;
    }
}
window.onload = function(){
    var scrolled = 0;
    var timer;
    
    document.getElementById('go-top').onclick = function(){
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop(){
        if(scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 20);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}

var navVisible = false;
function secondVisible(){
    if(navVisible){
        document.getElementById('second-navbar').style.display = 'none';

        navVisible = false;
    }
    else{
        document.getElementById('second-navbar').style.display = 'grid';
        navVisible = true;
    }
}

var genreVisible = false;
function secondNavGenre(){
    if(genreVisible){
        document.getElementById('second-nav-genre').style.display = 'none';
        genreVisible = false;
    }
    else{
        document.getElementById('second-nav-genre').style.display = 'grid';
        genreVisible = true;
    }
}

var soonVisible = false;
function soon(){
    if(soonVisible){
        document.getElementById('soon-block').style.display = 'none';
        soonVisible = false;
    }
    else{
        document.getElementById('soon-block').style.display = 'grid';
        soonVisible = true;
    }
}
