const panels = $('.panel');

console.log(panels);
function toggleOpen(){
	console.log($(this));
	$(this).toggleClass('open');
}

function toggleActive(e){
	if(e.originalEvent.propertyName.includes('flex')){
		$(this).toggleClass('open-active');
	}
}

panels.each(function(){$(this).on('click', toggleOpen);});
panels.each(function(){$(this).on('transitionend', toggleActive);});