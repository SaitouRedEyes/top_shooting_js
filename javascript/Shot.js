var Shot = function(px, py, pw, ph, direction)
{
	this.direction = direction;
	this.w = 20;
	this.h = 20;
	this.color = "RED";
	this.speed = 20;
	this.stats = "live";
	
	this.setPos = function(px, py, pw, ph)
	{
		switch(this.direction)
		{
			case "left":  this.x = px - (pw / 2); 
						  this.y = py + (ph / 2) - (this.w / 2); break;
			case "right": this.x = px + pw; 
						  this.y = py + (ph / 2) - (this.w / 2); break;
			case "up":    this.x = px + (pw / 2) - (this.h / 2); 
						  this.y = py - (ph / 2);		break;		  
			case "down":  this.x = px + (pw / 2) - (this.h / 2); 
						  this.y = py + ph; 					 break;			  
		}
	}
	
	this.setPos(px, py, pw, ph);
	
	this.update = function(enemy)
	{
		switch(this.direction)
		{
			case "left":  this.x -= this.speed; break;
			case "right": this.x += this.speed; break;
			case "up":    this.y -= this.speed; break;			  
			case "down":  this.y += this.speed; break;			  
		}
		
		if(this.x < 0 || this.x + this.w > canvas.width ||
		   this.y < 0 || this.y + this.h > canvas.height)
		{
		    this.stats = "bordCollid";
		}
		
		if(this.x + this.w > enemy.x && this.x < enemy.x + enemy.w &&
		   this.y + this.h > enemy.y && this.y < enemy.y + enemy.h)
		{
			this.stats = "shotCollid";
			enemy.setPos();
		}
	}

	this.draw = function()
	{
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h);
	}
}