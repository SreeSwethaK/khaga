jQuery(document).ready(function($){

    $(document).mousemove(function(e) {
        var	cursorMovementX = e.pageX,
            cursorMovementY = e.pageY;

        $('.mouseMove').each(function(){
            var layer = $(this).attr('layer');
            $(this).css({
                '-webkit-transform': 'translate(' + movementDirection(cursorMovementX,layer) + 'px,'
                 + movementDirection(cursorMovementY,layer) + 'px)'
            });
        });
    });
});

function movementDirection(cursorMovement, layer) {
    var movementDamper = 100;
    return cursorMovement * layer / movementDamper;
}