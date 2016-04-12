var Circle = function()
{
	this.x = localStorage.getItem("circleX") === null ? 
	690 : parseInt(localStorage.getItem("circleX"));
	this.y = localStorage.getItem("circleY") === null ? 
	300 : parseInt(localStorage.getItem("circleY"));
	this.r = 60;
	this.color = "BLACK";	
	this.speedY = localStorage.getItem("circleSpeedY") === null ? 
	5 : parseInt(localStorage.getItem("circleSpeedY"));
	
	this.update = function()
	{
		this.y += this.speedY;

		if(this.y + this.r > canvas.height || this.y - this.r < 0) 
		{
			this.speedY *= -1;
			localStorage.setItem("circleSpeedY", this.speedY);
		}
		
		localStorage.setItem("circleX", this.x);
		localStorage.setItem("circleY", this.y);
	}

	this.draw = function()
	{
		context.fillStyle = this.color;
		context.beginPath();
		context.arc( this.x, this.y, this.r, 0, 2 * Math.PI);
		context.fill();		
	}
}