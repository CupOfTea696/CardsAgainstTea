(function(window, app){
    var transitionEvent = function(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };
        
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
        return false;
    }
    
    var animationEvent = function(){
        var a;
        var el = document.createElement('fakeelement');
        var animations = {
            'WebkitAnimation' : 'webkitAnimationEnd',
            'OAnimation' : 'oanimationend',
            'msAnimation' : 'MSAnimationEnd',
            'animation' : 'animationend'
        };
        
        for(a in animations){
            if( el.style[a] !== undefined ){
                return animations[a];
            }
        }
        return false;
    }
    
    app.transitionEvent = transitionEvent;
    app.animationEvent = animationEvent;
})(window, app);