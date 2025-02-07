$(document).mousemove(function(e) {
    var moveX = e.pageX; // Adjusted divisor for smoother and more subtle movement
    var moveY = e.pageY; // Adjusted divisor for smoother and more subtle movement

    $('.drone').css({
        'transform': 'translate(' + moveX + 'px, ' + moveY + 'px)'
    });
});
