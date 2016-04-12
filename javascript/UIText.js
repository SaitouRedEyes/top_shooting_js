var UIText = function(x, y)
{
	this.x = x;
	this.y = y;
	this.color = "BLACK";

	this.draw = function(uiText)
	{
		context.fillStyle = this.color;
		context.font = "20px Arial";
		context.fillText(uiText, x, y);		
	}
}