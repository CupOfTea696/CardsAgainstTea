(function(window, app, $) {
    var document = window.document;
    
    if ($.support.pjax) {
        $(document).on('click', 'a[href^="' + app.baseUrl + '"]', function(e) {
            var container;
            
            if (! (container = $(this).data('pjax'))) {
                container = '#page';
            }
            
            $.pjax.click(e, {container: container, timeout: 3000});
        });
        
        $(document).on('submit', 'form', function(e) {
            var container;
            
            if (! (container = $(this).data('pjax'))) {
                container = '#page';
            }
            
            $.pjax.submit(e, container);
        });

        $(document).on('pjax:send', function(e) {
            app.Navigation.start(e.target);
        });
        
        $(document).on('pjax:success', function(e, data, status, xhr, options) {
            app.Navigation.complete(e.target, xhr.getResponseHeader('X-PJAX-Route'));
        });
        
        $(document).on('pjax:error', function(event, jqXHR, textStatus, error, options) {
            window.xhr = jqXHR;
            console.log([event, jqXHR, textStatus, error, options]);
            if (! (options.type == 'GET' && textStatus !== 'abort') && jqXHR.xhr.responseURL === options.requestUrl)  {
                document.write(jqXHR.responseText);
                document.title = jqXHR.status + ' ' + error;
            }
        });
        
        $(document).on('mousedown', '.\\--ripple, .\\+ripple', function(e){
            var $this = $(this),
                $ripple = $('<div/>'),
                btnOffset = $this.offset(),
                xPos = e.pageX - btnOffset.left,
                yPos = e.pageY - btnOffset.top;
            
            $ripple.addClass('ripple');
            
            var color = $this.data("ripple-color");
            if (color) {
                $ripple.css({background: color});
            }
            
            // handle multiple clicks so the buttons doesn't get overflow with effects.
            $this.find('.ripple').addClass('remove').on(app.transitionEvent(), function(){
                $(this).remove();
            });
            
            $ripple.css({
                width: $this.height(),
                height: $this.height(),
                top: yPos - ($ripple.height()/2),
                left: xPos - ($ripple.width()/2)
            })
            .appendTo($this);
            
            $ripple.on(app.animationEvent(), function(){
                $(this).remove();
            });
        });
        
        $(document).on('click', '.btn, :button, :submit, :reset', function() {
            $(this).blur();
        });
    }
})(window, app, jQuery);
