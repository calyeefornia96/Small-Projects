const inputs = $('.controls input');

function handleUpdate(e){
	console.log(e);
	const suffix = this.dataset.sizing || "";

	$(":root").css("base", "red");
}

inputs.each(function(){
	$(this).on('change', handleUpdate);
});

