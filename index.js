function changeColor(){
	var color = Math.random();
	var rectangles = document.getElementById("rectangles");
	var ctx = rectangles.getContext("2d");
	if (color < 0,16) {
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "red";
		ctx.fill();
	} if (color > 0.16 && color < 0.32){
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "blue";
		ctx.fill();
	} if (color > 0.32 && color < 0.48){
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "black";
		ctx.fill();
	} if (color > 0.48 && color < 0.64){
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "green";
		ctx.fill();
	} if (color > 0.64 && color < 0.80){
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "DarkRed";
		ctx.fill();
	} if (color > 0.80 && color < 0.99){
		ctx.beginPath();
		ctx.rect(30, 30, 150, 100);
		ctx.fillStyle = "DarkSlateBlue";
		ctx.fill();
	} else {
		console.log("Error");
	}
	console.log(color);
}