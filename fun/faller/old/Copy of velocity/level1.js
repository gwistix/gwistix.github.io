//								LEVEL!

var plats = new Array();
var splats = new Array();
var obja = new Array();

function Plat(name,h,l,w) {
	this.name = name;
	this.h = h;
	this.l = l;
	this.w = w;
	this.r = (l + w);
}

plats[0] = new Plat("ground",0,0,1125);
plats[1] = new Plat("p1",100,475,100);
plats[2] = new Plat("p2",224,575,100);

splats[0] = new Plat("palm",265,675,175);
splats[1] = new Plat("tramp",40,175,200);
splats[2] = new Plat("moon",387,75,85);
splats[3] = new Plat("noose",25,575,30);

obja[0] = new Plat("coco_1",1,675,35);
obja[1] = new Plat("coco_2",1,730,35);
obja[2] = new Plat("coco_3",1,780,50);

function printPlat(which) {
alert("Name: " + this.name + "\nHeight: " + this.h + "\nLeft: " + this.l + "\nWidth: " + this.w + "\nRight: " + this.r);
}

//LEVEL FUNCTIONS

function trampoline() {
	if (height <= (splats[1].h - 5) || height >= (splats[1].h + 5)) return;

	velocity = 30;

/*
	stop_at(splats[1].h);

	if (ck != "yes") return;
	if (height >= (splats[1].h - 5)) {
		chgImg("trampoline", "trampdown");
		thrust = 30;
		return;
	}
	if (ck =="no") {
		chgImg("trampoline", "trampup");
		thrust = 20;
	}
*/
}

function clearTramp() {
	chgImg("trampoline", "trampup");
	thrust = 20;
}

function gallows() {
	stop_at(splats[3].h);
	if (ck != "yes") return;

	if (height <= (splats[3].h + 5) && height >= (splats[3].h - 5)) {
		x = 576;
		character_div.style.left=x;
		inbox_div.style.left= (x + 25);
		die();
	}
}

function palmTree() {
	stop_at(splats[0].h);

	if (ck != "yes") return;
	if ((height <= (splats[0].h + 5)) && (height >= (splats[0].h - 5))) {
		switch (pstat)	{
			case 3: {
				chgImg("palm_tree", "palm_1");
				chgImg("coco_1", "coconut");
				pstat -= 1;
				coco1stat = 1;
				break;
			}
			case 2: {
				chgImg("palm_tree", "palm_2");
				chgImg("coco_2", "coconut");
				pstat -= 1;
				coco2stat = 1;
				break;
			}
			case 1: {
				chgImg("palm_tree", "palm_3");
				chgImg("coco_3", "coconut");
				pstat -= 1;
				coco3stat = 1;
				break;
			}
			case 0: break;
		}
	}
}
