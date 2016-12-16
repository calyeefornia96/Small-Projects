$(document).ready(function(){
	const hourHand = $(".hour-hand");
	const minHand = $(".min-hand");
	const secondHand = $(".second-hand");
	console.log(secondHand);
	function setDate(){
		const time = new Date();

		const seconds = time.getSeconds();
		const secondsDeg = ((seconds/60) *360) + 90;
		secondHand[0].style.transform = `rotate(${secondsDeg}deg)`;

		const mins = time.getMinutes();
		const minsDeg = ((mins/60) *360) + 90;
		minHand[0].style.transform = `rotate(${minsDeg}deg)`;

		const hour = time.getHours();
		const hoursDeg = ((hour/12) *360) + 90;
		hourHand[0].style.transform = `rotate(${hoursDeg}deg)`;
	}

	setInterval(setDate, 1000);
})