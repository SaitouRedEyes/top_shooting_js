var Enemy = function()
{
	this.w = 15;
	this.h = 15;
	this.color = "BLUE";
	this.startTime;
	
	this.setPos = function()
	{
		this.x = Math.floor(this.w + 
	                   (Math.random() * (canvas.width -  (this.w * 2))));
		this.y = Math.floor(this.h + 
	                   (Math.random() * (canvas.height - (this.h * 2))));
		this.startTime = Math.floor(gameElapsedTime());
	}
	
	this.setPos();
	
	this.update = function(player)
	{
		if(Math.floor(gameElapsedTime()) == this.startTime + 3) 
		{
			player.lives--;
			this.setPos();
		}
	}

	this.draw = function()
	{
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h);
	}
}