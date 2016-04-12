var Menu = function()
{	
	ConfigureFade(false, 0, 1);
	
	this.name = "Menu";
	this.background = new Image();
	this.background.src = "images/menu.jpg";
	
	this.update = function()
	{}

	this.draw = function()
	{
		context.clearRect(0, 0, canvas.width, canvas.height)
		
		context.drawImage(this.background, 0, 0);
	}	
	
	this.keyboardHandler = function(e, down)
	{
		if(e.keyCode == 13 && down) ConfigureFade(true, 1, 0);
	}
}