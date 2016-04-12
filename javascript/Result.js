var Result = function()
{	
	ConfigureFade(false, 0, 1);
	
	this.name = "Result";
	
	this.scoreUIText     = new UIText(canvas.width * 0.5, canvas.height * 0.4);
	this.highscoreUIText = new UIText(canvas.width * 0.5, canvas.height * 0.6);
	
	this.score = localStorage.getItem("1001score");
	
	this.setHighscore = function()
	{
		if(this.score > parseInt(localStorage.getItem("1001highscore")))
		{
			this.highscore = this.score;
			localStorage.setItem("1001highscore", this.highscore);
		}
		else this.highscore = localStorage.getItem("1001highscore");
	}
	
	this.setHighscore();
	
	this.update = function()
	{}

	this.draw = function()
	{
		context.clearRect(0, 0, canvas.width, canvas.height)
		
		this.scoreUIText.draw("Score: " + this.score);
		this.highscoreUIText.draw("Highscore: " + this.highscore);
	}	
	
	this.keyboardHandler = function(e, down)
	{
		if(e.keyCode == 13 && down) ConfigureFade(true, 1, 0);
	}
}