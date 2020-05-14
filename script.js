const random_color = () => {
	const a = Math.floor(Math.random()*256);
	const b = Math.floor(Math.random()*256);
	const c = Math.floor(Math.random()*256);

	const rgbBGcolor = "rgb(" + a +"," + b +"," + c + ")";
	console.log(rgbBGcolor);
	document.body.style.background = rgbBGcolor;
}
