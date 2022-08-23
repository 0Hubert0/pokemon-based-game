var sound, music, name;

sound=true;
music=true;


function chs()
{
	var s;
	
	s=document.getElementById("image1");
	
	if (sound==true) 
	{
		sound=false;
		s.setAttribute("src", "x.PNG");
	}
	else if (sound==false)
	{
		sound=true;
		s.setAttribute("src", "tik.PNG");
	}
}

function chm()
{
	var s;
	
	s=document.getElementById("image2");
	
	if (music==true) 
	{
		music=false;
		s.setAttribute("src", "x.PNG");
	}
	else if (music==false)
	{
		music=true;
		s.setAttribute("src", "tik.PNG");
	}
}


/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

function savename()
{
	name=document.getElementById("enter").value;
	console.log(name);
}

function closedif()
{
	var d;
	
	d=document.getElementById("dif");
	d.style.setProperty("display", "none");
}


function closecar()
{
	var d;
	
	d=document.getElementById("yourcar");
	
	d.style.setProperty("display", "none");
}

function opendif()
{
	var d, dd, a;
	
	d=document.getElementById("photo");
	dd=document.getElementById("photos");
	a=document.getElementById("dif");
	
	d.style.setProperty("width", "240px");
	d.style.setProperty("height", "209px");
	dd.style.setProperty("margin-left", "375px");
	dif.style.setProperty("display", "block");
}


function showst()
{
	var d;
	
	d=document.getElementById("settings");
	
	d.style.setProperty("display", "block");
}

function closest()
{
	var d;
	
	d=document.getElementById("settings");
	
	d.style.setProperty("display", "none");
}

function openmenu()
{
	var d1;
	
	d1 = document.getElementById("spis");
	
	d1.style.setProperty("display", "block");
}

function hidemenu()
{
	var d1;
	
	d1 = document.getElementById("spis");
	
	d1.style.setProperty("display", "none");
}

function opencreatecar()
{
	ph = document.getElementById("photos");
	yo = document.getElementById("yourcar");
	
	ph.style.setProperty("margin-left", "300px");
	yo.style.setProperty("display", "block");
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function createcar()
{
	var d=document.getElementById("back");
	hidemenu();
	opencreatecar();
	d.style.setProperty("display", "block");
}

function openst()
{
	hidemenu();
	showst();
}

function hidest()
{
	closest();
	openmenu();
}

function sg()
{
	savename();
	closecar();
	opendif();
}

function comeback()
{
	var dd=document.getElementById("yourcar");
	var cc=document.getElementById("dif");
	var ee=document.getElementById("photo");
	var ff=document.getElementById("photos");
	var gg=document.getElementById("back");
	
	var d=dd.style.getPropertyValue("display");
	var c=cc.style.getPropertyValue("display");
	
	if (d!="none")
	{
		closecar();
		openmenu();
		ff.style.setProperty("margin-left", "500px");
		gg.style.setProperty("display", "none");
	}
	
	else if(c!="none")
	{
		closedif();
		opencreatecar();
		ee.style.setProperty("width","423px");
		ee.style.setProperty("height","369px");
	}
}

function opendesca()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "attack your enemy");
}

function closedescp()
{
	var bdesci;
	
	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "");
}

function opendescb()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "block your enemy's attack");
}

function opendescp()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "use your potion");
}

function opendescd()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "try to dodge your enemy's attack");
}

function opendesch()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "heal");
}

function opendesci()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "usem item");
}

function openattack()
{
	var a, b;
	
	a = document.querySelectorAll('.foption');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption1');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function opendesca1()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "Strong attack - takes a lot of hp - consumes much stamina");
}

function opendesca2()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "Weak attack - takes low hp - consumes low stamina");
}

function opendesca4()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "Strong attack - takes many hp - consumes much stamina");
}

function opendesca5()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "Strong attack - takes very low hp - consumes low stamina");
}

function opendesch1()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 1st method of healing");
}

function opendesch2()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 2nd method of healing");
}

function opendesch4()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 3rd method of healing");
}

function opendesch5()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 4th method of healing");
}

function openpotion()
{
	var a, b;
	
	a = document.querySelectorAll('.foption');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption3');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function closeback2()
{
	var a, b;
	
	a = document.querySelectorAll('.foption3');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function opendescp1()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "gives big amount of health");
}

function opendescp2()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "gives big amount of stamina");
}

function opendescp4()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "your attacks deal more damage");
}

function opendescp5()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "your enemy will act confused");
}

function openitem()
{
	var a, b;
	
	a = document.querySelectorAll('.foption');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption4');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

function opendesci1()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 1st item");
}

function opendesci2()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 2nd item");
}

function opendesci4()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 3rd item");
}

function opendesci5()
{
	var bdesci;

	bdesci=document.getElementById("desci");
	bdesci.setAttribute("value", "description of 4th item");
}

function closeback3()
{
	var a, b;
	
	a = document.querySelectorAll('.foption4');
	a.forEach (a=>{a.style.setProperty("display", "none")});
	b = document.querySelectorAll('.foption');
	b.forEach (b=>{b.style.setProperty("display", "block")});
}

