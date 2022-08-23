function closeback()
{
	var a, b;
	
	a = document.querySelectorAll('.foption1');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function opengame()
{
	var d=document.getElementById("fight");
	var c=document.getElementById("photor");
	var e=document.getElementById("photo");
	var f=document.getElementById("stats1");
	var g=document.getElementById("stats22");
	
	d.style.setProperty("display", "block");
	c.style.setProperty("display", "block");
	c.style.setProperty("margin-top", "110px");
	e.style.setProperty("margin-left", "350px");
	f.style.setProperty("display", "block");
	g.style.setProperty("display", "block");
}


var difficulty;


difficulty=1;

function closeback0()
{
	var d=document.getElementById("back");
	d.style.setProperty("display", "none");
}

function makeeasy()
{ 	
	var d=document.getElementById("optdif");
	d.setAttribute("value", "difficulty: easy");
	difficulty=1;
	closedif();
	closeback0();
	opengame();
}

function makenormal()
{
	var d=document.getElementById("optdif");
	d.setAttribute("value", "difficulty: normal");
	difficulty=2;
	closedif();
	closeback0();
	opengame();
}

function makehard()
{
	var d=document.getElementById("optdif");
	d.setAttribute("value", "difficulty: hard");
	difficulty=3;
	closedif();
	closeback0();
	opengame();
}

function changedif()
{
	var d=document.getElementById("optdif");
	
	if (difficulty==1)
	{
		d.setAttribute("value", "difficulty: normal");
		difficulty=2;
	}
	else if (difficulty==2)
	{
		d.setAttribute("value", "difficulty: hard");
		difficulty=3;
	}
	else if (difficulty==3)
	{
		d.setAttribute("value", "difficulty: easy");
		difficulty=1;
	}
}

function openheal()
{
	var a, b;
	
	a = document.querySelectorAll(".foption");
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll(".foption2");
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function closeback1()
{
	var a, b;
	
	a = document.querySelectorAll('.foption2');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

class Character
{
	constructor(strength, health, stamina, height, obesity, musculity) 
	{
		this.strength=strength;
		this.health=health;
		this.stamina=stamina;
		this.height=height;
		this.obesity=obesity;
		this.musculity=musculity;
	}
	/*buildcar()
	{
		var Player = new Character(30, 300, 100);
 	}*/
	buildstats()
	{
		this.height = Math.floor(Math.random()*3)+1;
		console.log(this.height);
		if (this.height==1)
		{
			Math.floor(this.stamina=this.stamina*1.1)+1;
		}
		else if (this.height==3)
		{
			Math.floor(this.stamina=this.stamina*0.9)+1;
		}
		this.obesity = Math.floor(Math.random()*3)+1;
		console.log(this.obesity);
		if (this.obesity==1)
		{
			this.strength=this.strength*1.2;
			Math.floor(this.stamina=this.stamina*0.85)+1;
		}
		else if (this.obesity==3)
		{
			this.strength=this.strength*1.4;
			Math.floor(this.health=this.health*1.1)+1;
			Math.floor(this.stamina=this.stamina*1.1)+1;
		}
		this.musculity = Math.floor(Math.random()*3)+1;
		console.log(this.musculity);
		if (this.musculity==1)
		{
			this.strength=this.strength*1.4;
			Math.floor(this.health=this.health*1.2)+1;
			Math.floor(this.stamina=this.stamina*0.9)+1;
		}
		else if (this.musculity==2)
		{
			Math.floor(this.health=this.health*1.05)+1;
		}
		else if (this.musculity==3)
		{
			this.strength=this.strength*0.8;
			Math.floor(this.stamina=this.stamina*1.1)+1;
		}
		Math.floor(this.stamina)+1;
	}
	showstats()
	{
		console.log(Player.strength, Player.health, Player.stamina);
	}
}

var Player = new Character(30, 300, 100, 1, 1, 1);
Player.buildstats();
Player.showstats();


