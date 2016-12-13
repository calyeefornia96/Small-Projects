
function removeTransition() {
    $(this).removeClass("playing");
}


function playSound(e){
	const audio = $(`audio[data-key="${e.keyCode}"]`);
	const key = $(`div[data-key="${e.keyCode}"]`);
	if(!audio) return;
	key.addClass('playing');
	audio[0].currentTime = 0;
	audio[0].play();
}

const keys = $(".key");
keys.each(function(){$(this).on('transitionend webkitTransitionEnd oTransitionEnd', removeTransition)});

$('body').on("keydown", playSound);

