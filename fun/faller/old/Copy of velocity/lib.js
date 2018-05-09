var char = prompt("Which character would you like to use?\n(Guy, Habib, Clown, or Bean)","guy");

function init()
{
	var IE4 = (document.all && !document.getElementById)? true : false;
	var W3C = (document.getElementById)? true : false;

	if (IE4)
	{
		character_div = document.all['char_div'];
	}
	else
	{
		character_div = document.getElementById('char_div');
	}
}

function DisplayKey(e) {
	if (e.keyCode) keycode=e.keyCode;
	else keycode=e.which;

	if (dead == "yes") return;
	switch (keycode)	{
		case 13: dock(); break;
		case 48: dock(); break;
		case 50: {
			dir = "";
			ckImg();
			break;
		}
		case 52: move("left"); break;
		case 53: jump(); break;
		case 54: move("right"); break;
		case 104: alert(height); break;
		case 105: alert(inv); break;
		case 111: alert(obj); break;
		case 118: alert(velocity); break;
		case 120: alert(x); break;
	}
	
	window.status=keycode;
}

//-	-	-	-	-	IMAGE CHANGER
//			CHARACTER IMAGE DEFINITIONS START HERE
drop = new Image;
drop.src = char + "/fall.gif";

stand = new Image;
stand.src = char + "/stand.gif";

left = new Image;
left.src = char + "/left.gif";

run_left = new Image;
run_left.src = char + "/run_left.gif";

jump_left = new Image;
jump_left.src = char + "/jump_left.gif";

right = new Image;
right.src = char + "/right.gif";

run_right = new Image;
run_right.src = char + "/run_right.gif";

jump_right = new Image;
jump_right.src = char + "/jump_right.gif";

up = new Image;
up.src = char + "/jump.gif";

hanged = new Image;
hanged.src = char + "/hung.gif";

//			OBJECT IMAGE DEFINITIONS START HERE
none = new Image;
none.src = "obj/blank.gif";

trampup = new Image;
trampup.src = "obj/trampoline.gif";

trampdown = new Image;
trampdown.src = "obj/trampoline2.gif";

palm_1 = new Image;
palm_1.src = "obj/palm_1.gif";

palm_2 = new Image;
palm_2.src = "obj/palm_2.gif";

palm_3 = new Image;
palm_3.src = "obj/palm_3.gif";

coconut = new Image;
coconut.src = "obj/coconut.gif";

//			FUNCTIONS START HERE

function chgImg(name, image) {
	if (document.images)
	{
	document[name].src = eval(image+".src");
	}
}

function ckImg() {
	dirck();
	if (dir != "left" && dir != "right") {
		if (velocity == 0) chgImg("guy", "stand");
		if (velocity < 0) chgImg("guy", "drop");
		if (velocity > 0) chgImg("guy", "up");
	}
}

function dirck() {
	if (dir == "left") {
		if (velocity == 0) chgImg("guy", "left");
		if (velocity < 0) chgImg("guy", "run_left");
		if (velocity > 0) chgImg("guy", "jump_left");
	}
	if (dir == "right") {
		if (velocity == 0) chgImg("guy", "right");
		if (velocity < 0) chgImg("guy", "run_right");
		if (velocity > 0) chgImg("guy", "jump_right");
	}
	if (dir != "left" && dir != "right") return;
}

function dock() {
	chgImg("guy", "stand");
	dir = "";
	
	if (obj == "You can't do anything here" && inv != "Empty") dropIt();

	if (obj != "You can't do anything here") {
		if (inv != "Empty") {
			document.form4.input4.value = "You can only hold one thing at a time";
			return;
		}
		getIt();
		return;
	}
}

function die() {
	chgImg("guy", "hanged");
	dead = "yes";
	document.form4.input4.value = "You are dead.";
	alert("You are dead.");
	chgImg("guy", "hanged");
	dropIt();
}
