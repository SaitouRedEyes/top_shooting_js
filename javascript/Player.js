var Player = function()
{
	this.w = 50;
	this.h = 50;
	this.x = (canvas.width  / 2) - (this.w / 2);
	this.y = (canvas.height / 2) - (this.h / 2);
	this.color = "GREEN";
	this.speed = 10;
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	this.currDirection = "right";
	this.score = 0;
	this.lives = 3;
	
	this.shots = new Array();
		
	this.update = function(enemy)
	{
		if(this.lives <= 0) 
		{
			localStorage.setItem("1001score", this.score);
			ConfigureFade(true, 1, 0);
		}
					
		if(this.left) 
		{ 
			this.currDirection = "left"; 
			this.x -= this.speed; 
		}
		else if(this.right) 
		{
			this.currDirection = "right"; 
			this.x += this.speed;
		}
		else if(this.up)    
		{
			this.currDirection = "up"; 
			this.y -= this.speed;
		}
		else if(this.down)  
		{
			this.currDirection = "down"; 
			this.y += this.speed;
		}
		
		if(this.x < 0) this.x = 0;
		else if(this.x + this.w > canvas.width) this.x = canvas.width - this.w;
		
		if(this.y < 0) this.y = 0;
		else if(this.y + this.h > canvas.height) this.y = canvas.height - this.h;
		
		for(var shot in this.shots) 
		{
			this.shots[shot].update(enemy);
			
			switch(this.shots[shot].stats)
			{
				case "shotCollid": this.score++;
								   this.shots.splice(shot, 1); break;
				case "bordCollid": this.shots.splice(shot, 1); break;
			}
		}
		
		//console.log(this.shots.length);
	}

	this.draw = function()
	{
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h);
		
		for(var shot in this.shots) this.shots[shot].draw();
	}
	
	this.shot = function()
	{
		this.shots.push(new Shot(this.x, this.y, this.w, this.h, this.currDirection));
	}
}