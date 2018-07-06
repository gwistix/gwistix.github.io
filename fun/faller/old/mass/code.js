
//								CODE
var tall = 144;

var ck;
var dir;
var act = new Array();
	act[0] = "";
	act[1] = "";
var obj = "You can't do anything here";
var inv = "Empty";

var gforce = 1;
var afriction = 0;
var gravity = (gforce - afriction);
var velocity = 0;
var thrust = 20;
var y = 0;
var height;

var dead = "no";

var pstat = 3;
	var coco1stat = 0;
	var coco2stat = 0;
	var coco3stat = 0;

function gravitate(mass) {
	if (ck == "yes") return;
	ckImg();
	if (thrust == 30) clearTramp();
	if (velocity < 0) ckplat();
	if (dead == "yes") return;
	if (height < -175 && velocity < 0) {
		velocity = 20;
//		die();
	}

//GRAVITATION STARTS HERE
	velocity -= gravity;
	y -= velocity;
	height = ((600 - tall) - y);
	grav=window.setTimeout("gravitate();",30);
	ckImg();
	character_div.style.top=y;
	inbox_div.style.top = (y - 22);

	mass1_div.style.top=y;
	mass2_div.style.top=y;
	mass3_div.style.top=y;

}


function ckplat() {
	for (i in plats) {
		if (x >= plats[i].l && x < plats[i].r) stop_at(plats[i].h);
	}

	if (x >= splats[0].l && x < splats[0].r) palmTree();
	if (x >= splats[1].l && x < splats[1].r) trampoline();
	if (x >= splats[2].l && x < splats[2].r) stop_at(splats[2].h);
	if (x >= splats[3].l && x < splats[3].r) gallows();
}


function ckob() {
	if (ck != "yes") return;

	obj = "You can't do anything here";
	if ((x >= obja[0].l && x < obja[0].r) && (height <= (5 + obja[0].h) && height >= (obja[0].h - 5))) obj = "coco_1";
	if ((x >= obja[1].l && x < obja[1].r) && (height <= (5 + obja[1].h) && height >= (obja[1].h - 5))) obj = "coco_2";
	if ((x >= obja[2].l && x < obja[2].r) && (height <= (5 + obja[2].h) && height >= (obja[2].h - 5))) obj = "coco_3";

document.form4.input4.value = obj;
}


function jump(how_high) {
	if (how_high == undefined) how_high = thrust;
	
	ck = "no";
	if (velocity != 0) return;

	velocity = how_high;
	gravitate();
}

function move(lorr) {
	if (lorr == "left") {
		dir = "left";
		chgImg("guy", "run_left");
		x -= 25;
	}
	if (lorr == "right") {
		dir = "right";
		chgImg("guy", "run_right");
		x += 25;
	}
	character_div.style.left=x;
	inbox_div.style.left = (x + 25);
	jump(1);
}

function getIt() {
var tock;
var type;

	switch (obj)	{
		case "coco_1": {
			coco1stat -= 1;
			tock = coco1stat;
			type = "coconut";
			coconut1.style.left = 0;
			coconut1.style.top = 0;
			break;
		}
		case "coco_2": {
			coco2stat -= 1;
			tock = coco2stat;
			type = "coconut";
			coconut2.style.left = 0;
			coconut2.style.top = 0;
			break;
		}
		case "coco_3": {
			coco3stat -= 1;
			tock = coco3stat;
			type = "coconut";
			coconut3.style.left = 0;
			coconut3.style.top = 0;
			break;
		}
		case "You can't do anything here": tock = -1; break;
	}

	if (tock < 0) {
		document.form4.input4.value = "You can't do anything here";
		return;
	}

	chgImg(obj, "none");
	chgImg("inbox", type);
	inv = obj;
}

function dropIt() {
var tock;
var type;
var numbox = y + (tall - 28);

	switch (inv)	{
		case "coco_1": {
			coco1stat += 1;
			tock = coco1stat;
			type = "coconut";
			coconut1.style.left = inbox_div.style.left;
			coconut1.style.top = numbox;
			obja[0] = new Plat(inv,(height + 1),x,35);
			break;
		}
		case "coco_2": {
			coco2stat += 1;
			tock = coco2stat;
			type = "coconut";
			coconut2.style.left = inbox_div.style.left;
			coconut2.style.top = numbox;
			obja[1] = new Plat(inv,(height + 1),x,35);
			break;
		}
		case "coco_3": {
			coco3stat += 1;
			tock = coco1stat;
			type = "coconut";
			coconut3.style.left = inbox_div.style.left;
			coconut3.style.top = numbox;
			obja[2] = new Plat(inv,(height + 1),x,35);
			break;
		}
		case "You can't do anything here": tock = -1; break;
	}

	if (tock < 0) {
		document.form4.input4.value = "You can't do anything here";
		return;
	}

	chgImg("inbox", "none");
	chgImg(inv, type);
	inv = "Empty";
}


function stop_at(level) {
	topmar = (level + 20);
	botmar = (level - 15);

	if (height >= botmar && height <= topmar) {
		if (velocity < -50) die();
		y = ((599 - tall) - level);
		height = level;
		character_div.style.top=y;
		inbox_div.style.top = (y - 22);
		velocity = gforce;
		ck = "yes";
		ckImg();
		ckob();
	}
}