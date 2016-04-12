var Game = function()
{
	ConfigureFade(false, 0, 1);
	
	this.name = "Game";
	this.player = new Player();
	this.enemy = new Enemy();
	this.score = new UIText(5, 20);
	this.highscoreUIText = new UIText(5, 50);
	this.playerLives = new UIText(canvas.width - 100, 20);
	
	localStorage.setItem("1001score", 0);
	//localStorage.clear();
	
	this.setHighscore = function()
	{
		if(localStorage.getItem("1001highscore") === null)
		{
			this.highscore = 0;
			localStorage.setItem("1001highscore", 0);
		}
		else this.highscore = localStorage.getItem("1001highscore"); 
	}	

	this.setHighscore();
	
	this.update = function()
	{
		this.player.update(this.enemy);
		this.enemy.update(this.player);
	}

	this.draw = function()
	{
		context.clearRect(0, 0, canvas.width, canvas.height)
		
		this.player.draw();
		this.playerLives.draw("Lives: " + this.player.lives);
		this.enemy.draw();
		this.score.draw("Score: " + this.player.score);
		this.highscoreUIText.draw("Highscore: " + this.highscore);
	}	
	
	this.keyboardHandler = function(e, down)
	{
		switch (e.keyCode)
		{
			case 37: this.player.left  = down;     break;		
			case 39: this.player.right = down;     break;
			case 38: this.player.up    = down;     break;
			case 40: this.player.down  = down;     break;
			case 32: if(!down) this.player.shot(); break;
		}
	}
}