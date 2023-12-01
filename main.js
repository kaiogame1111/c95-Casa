
var canvas = new fabric.canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_y=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-b.png", function(img) {
		hole.obj = img;
		hole.obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole.obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole.obj);
	});
	new_image();
}

function new_image()
{
	fabric.image.fromURL("golf-b.png", function(img) {
		ball.obj = img;
		ball.obj.scaleToWidth(50);
		black.obj.scaleToHeight(50);
		ball.obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball.obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3"),innerHTML="Hole In One!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			ball_y = ball_y + block_image_height;
			console.log("Height Of The Block Of The Image =" + block_image_height);
			console.log("When The Arrow Is Down And Pressed, X = " + ball_x + ", Y =" +ball_y);
        canvas.remove(ball_obj);
		new_image();
		}
	}

	function down()
	{

		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("Height Of The Block Of The Image =" + block_image_height);
			console.log("When The Arrow Is Down And Pressed, X = " + ball_x + ", Y =" +ball_y);
        canvas.remove(ball_obj);
		new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x + block_image_width;
			console.log("Height Of The Block Of The Image =" + block_image_height);
			console.log("When The Arrow Is Down And Pressed, X = " + ball_x + ", Y =" +ball_y);
        canvas.remove(ball_obj);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("Height Of The Block Of The Image =" + block_image_height);
			console.log("When The Arrow Is Down And Pressed, X = " + ball_x + ", Y =" +ball_y);
        canvas.remove(ball_obj);
		new_image();
		}
	}
	
}

