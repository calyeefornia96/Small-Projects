const inputs = $('.controls input');

function handleUpdate(){

	const suffix = this.dataset.sizing || "";

	$(":root").css("base", "red");
}

inputs.each(function(){
	$(this).on('change', handleUpdate);
});

