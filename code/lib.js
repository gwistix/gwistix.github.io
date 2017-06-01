/*
TODO: Make custom Alert(), Prompt(), and Confirm() dialog boxes
*/

/* Capitalizes the first letter of a string and changes all other letters to lowercase */
String.prototype.capitalize = function() {
 var arr = this.toLowerCase().split("");
 if (arr[0]) arr[0] = arr[0].toUpperCase();
 return arr.join("");
}

/* Capitalizes the first letter at the beginning of a sentence. Does not make other letters lowercase */
String.prototype.toSentenceCase = function() {
 var str = this.replace(/ +/g," ");
 var arr = str.split(". ");
 console.log(arr);
 var newArr = [];
 arr.forEach(function(sentence){
  newArr.push(sentence.capitalize());
 });
 return newArr.join(". ");
}

/* Formats a single- or multi-word string as camel case */
String.prototype.toCamelCase = function() {
 var arr = this.toLowerCase().split(" ");
 for (var len = arr.length, i=1; i<len; i++) {
  arr[i] = arr[i].capitalize();
 }
 return arr.join("");
}

/* Formats a string as title case */
String.prototype.toTitleCase = function() {
 var excludedWords = ["a", "an", "the", "and", "but", "or", "above", "about", "across", "against", "along", "among", "around", "at", "before", "behind", "below", "beneath", "beside", "between", "beyond", "by", "down", "during", "except", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "since", "to", "toward", "through", "under", "until", "up", "upon", "with", "within"];

 var words = this.toLowerCase().split(" ");
 console.log(words);
 words[0] = words[0].capitalize();
 for (var len = words.length, i=1; i<len; i++) {
  if (words[i] && !~excludedWords.indexOf(words[i])) {
   words[i] = words[i].capitalize();
  }
 }
 return words.join(" ");
}

/* Formats a string as ugly case (i.e., uGlY cAsE) */
String.prototype.toUglyCase = function() {
 var words = this.toLowerCase().split(" ");
 words.forEach(function(word, index){
  var arr = word.toLowerCase().split("");
  var str = "";
  arr.forEach(function(char,index){
   if (index % 2) str += char.toUpperCase();
   else str += char;
  });
  words[index] = str;
 });
 return words.join(" ");
}

/* Converts classes named for unicode HTML fr, scr, opf, and cy entities to those entities
*/
function unicodeHtmlEntities() {
 // Fraktur
 document.querySelectorAll(".unicode-fr").forEach(function(element){
  var arr = element.innerHTML.split("");
  element.innerHTML = "";
  arr.forEach(function(char){
   if (char.match("[A-z]")) {
    element.innerHTML += "&" + char + "fr;";
   }
   else element.innerHTML += char;
  });
 });

 // Script
 document.querySelectorAll(".unicode-scr").forEach(function(element){
  var arr = element.innerHTML.split("");
  element.innerHTML = "";
  arr.forEach(function(char){
   if (char.match("[A-z]")) {
    element.innerHTML += "&" + char + "scr;";
   }
   else element.innerHTML += char;
  });
 });

 // Open face
 document.querySelectorAll(".unicode-opf").forEach(function(element){
  var arr = element.innerHTML.split("");
  element.innerHTML = "";
  arr.forEach(function(char){
   if (char.match("[A-z]")) {
    element.innerHTML += "&" + char + "opf;";
   }
   else element.innerHTML += char;
  });
 });

 // Cyrillic
 document.querySelectorAll(".unicode-cy").forEach(function(element){
  var alfavit = ["soft", "hard", "shch", "ie", "io", "zh", "kh", "ts", "ch", "sh", "yu", "ya", "a", "b", "v", "g", "d", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "e"];
  alfavit.forEach(function(char){
   var re = new RegExp(char,"g");
   element.innerHTML = element.innerText.replace(re, "&" + char + "cy;");
   re = new RegExp(char.toUpperCase(),"g");
   element.innerHTML = element.innerText.replace(re, "&" + char.toUpperCase() + "cy;");
  });
 });
}

/* Returns all individual characters from a string either
 * sorted by frequency (default) or in lexicographical
 * order (if the parameter `lexicographical` is true)
 */
function getCharacters(string, lexicographical) {
	var chars = [],
	    freqs = [],
	    list = "",
	    string = string || document.body.innerHTML.replace(/<[^>]*>/g,"");

	string.split("")
	.forEach(
		function(char) {
			var ref = chars.indexOf(char);
			if (ref < 0) { // not already in the array
				chars.push(char);
				freqs.push( {char:char, freq:1} );
			}
			else { // already there
				freqs[ref].freq++;
			}
		}
	);

	if (lexicographical) {
		return chars.sort().join("<br>");
	}

	freqs.sort(function(a, b){return b.freq - a.freq}); // descending freq
	chars = freqs.map(el => el.char + ":	" + el.freq);
	console.log(freqs);
	return chars.join("<br>");
}

/* Converts seconds into hh:mm:ss or "# days, # hours, # minutes, and # seconds" format 
 * This function has some issues
 */
function timeDisp(seconds,longform) {

	var y = Math.floor(seconds/31556952);
	var M = Math.floor(seconds/2629746)%12;
/*	var w = Math.floor(Math.floor(seconds/604800)%4.348125);*/
	var d = Math.floor(seconds/86400)%7;
	var h = Math.floor(seconds/3600)%24;
	var m = Math.floor(seconds/60)%60;
	var s = seconds%60;

	if (longform) {
		if (y == 0) {
			y_disp = "";
		}
		else y_disp = y + " year" + ((y==1)?"":"s") + ", ";

		if (M == 0) {
			M_disp = "";
		}
		else M_disp = M + " month" + ((M==1)?"":"s") + ", ";

/*		if (w == 0) {
			w_disp = "";
		}
		else w_disp = w + " week" + ((w==1)?"":"s") + ", ";*/


		if (d == 0) {
			d_disp = "";
		}
		else d_disp = d + " day" + ((d==1)?"":"s") + (((h>0&&(m>0||s>0)) || (m>0&&s>0))?", ":"") + (((h==0&&m==0&&s>0) || (h==0&&m>0&&s==0) || (h>0&&m==0&&s==0))?" and ":"");
		

		if (h == 0) {
			h_disp = "";
		}
		else h_disp = h + " hour" + ((h==1)?"":"s") + ((d>0&&((m>0&&s==0)||(m==0&&s>0)))?", and ":"") + ((d==0&&m>0&&s==0)?" and ":"") + ((m>0&&s>0)?", ":"");

		if (m == 0) {
			m_disp = "";
		}
		
		else m_disp = m + " minute" + ((m==1)?"":"s") + (((d>0||h>0)&&s>0)?",":"") + ((s>0)?" and ":"");

		if (s == 0) {
			s_disp = "";
		}
		else s_disp = s + " second" + ((s==1)?"":"s");

		return y_disp + M_disp /*+ w_disp*/ + d_disp + h_disp + m_disp + s_disp;
	}
	else return addLeadingZeroes(h)+":"+addLeadingZeroes(m)+":"+addLeadingZeroes(s);
}

/* Adds leading zeroes to single-digit numbers */
function addLeadingZeroes(num) {
	return (num<10) ? "0"+num : num;
}

/* Converts pseudo-IPA in custom IPA tags to Unicode IPA characters */
function convertIPA() {
	ipa = "ʕœøɜɥʦʣɾħɒØɢʷɛʁθʏʊɪɔɸɑʃðɟɣʰʲæʎʒχçʌβŋɯɡˈə̥͡";
	kbd = "`1234567890QWERTYUIOPASDFGHJKLZXCVBNMg'@#_";

	Transcriptions = document.getElementsByTagName("ipa");

	tlen = Transcriptions.length;
	for (i=0;i<tlen;i++) {
		temp = Transcriptions[i].innerHTML;
		ilen = ipa.length;
		for (j=0;j<ilen;j++) {
			kbd_char = new RegExp(kbd.charAt(j),"gm");
			temp = temp.replace(kbd_char,ipa.charAt(j));
		}
		temp = temp.replace(/\&/g,"æ");
//		temp = temp.replace(/\!/g,"ɨ");
		temp = temp.replace(/\:/g,"ː");
		temp = temp.replace(/\~/g,"̃");
		temp = temp.replace(/\^/g,"˞");
		temp = temp.replace(/\?/g,"ʔ");

		Transcriptions[i].innerHTML = temp;
	}

	Transcriptions = document.getElementsByClassName("ipa");

	tlen = Transcriptions.length;
	for (i=0;i<tlen;i++) {
		temp = Transcriptions[i].innerHTML;
		ilen = ipa.length;
		for (j=0;j<ilen;j++) {
			kbd_char = new RegExp(kbd.charAt(j),"gm");
			temp = temp.replace(kbd_char,ipa.charAt(j));
		}
		temp = temp.replace(/\&/g,"æ");
//		temp = temp.replace(/\!/g,"ɨ");
		temp = temp.replace(/\:/g,"ː");
		temp = temp.replace(/\~/g,"̃");
		temp = temp.replace(/\^/g,"˞");
		temp = temp.replace(/\?/g,"ʔ");

		Transcriptions[i].innerHTML = temp;
	}
}


function pseudos(plain_lists) {
	/* Converts the content of elements with the 'pseudo-table' class to HTML <table> elements 
	 * Pseudo-tables should be formatted with tabs as in the following example:
	 * <p class='pseudo-table'>Name	Occupation
	 * Obama	President
	 * Gwistix	Web designer</p>
	 *
	 * This automatically formats the first line using <TH> cells.
	 * To use regular <TD> cells for the first line, just put it on a separate line from the tag:
	 * <p class='pseudo-table'>
	 * Name	Occupation
	 * Obama	President
	 * Gwistix	Web designer</p>
	 *
	 * The closing tag can also be on a separate line, with no difference.
	 */
	pseudoTables = document.getElementsByClassName("pseudo-table");
	plen = pseudoTables.length;
	if (plen > 0) {
		for (i=0;i<plen;i++) {
			temp = pseudoTables[i].innerHTML;
			Temp = temp.split("\n");
	
			if (Temp[0].length>=1) Temp[0] = "<tr><th>" + Temp[0].replace(/\t/g,"</th><th>") + "</th></tr>";
	
			tlen = Temp.length;
			for (j=1;j<tlen;j++) {
				if (Temp[j]) Temp[j] = "<tr><td>" + Temp[j].replace(/\t/g,"</td><td>") + "</td></tr>";
				else Temp[j] = "";
			}
	
			temp = "<table border=1>" + Temp.join("") + "</table>";
	
			pseudoTables[i].innerHTML = temp;
		}
	}

	/* Converts the content of elements with the 'pseudo-list' class to pseudo-bulleted lists
	 * Pseudo-lists should be formatted with tabs as in the following example:
	 * <p class='pseudo-list'>DOM
	 * 	head
	 * 		title
	 * 		script
	 * 		style
	 * 	body
	 * 		header
	 * 		article
	 * 			1st section
	 * 			2nd section
	 * 			3rd section
	 * 		footer</p>
	 * 
	 * The first line is automatically formatted as bold if it's on the same line as the opening tag.
	 * To avoid this, just put it on its own line.
	 * 
	 * If pseudos() is called as pseudos(true), plain bullet points (•) are used throughout.
	 * Otherwise, bulleting is based on tab indentation, as follows:
	 * 	1 tab	●
	 * 	2 tabs	○
	 * 	3 tabs	▪
	 * 	4 tabs	▫
	 * 	5+ tabs	-
	 */
	pseudoLists = document.getElementsByClassName("pseudo-list");
	plen = pseudoLists.length;

	if (plen > 0) {
		pseudoLists[0].innerHTML = "<b>" + pseudoLists[0].innerHTML.replace(/\n/,"</b>\n");
		for (i=0;i<plen;i++) {
			temp = pseudoLists[i].innerHTML;
			if (plain_lists) {
				temp = temp.replace(/\t/g,"\t• ");
				temp = temp.replace(/• \t/g,"\t");
			}
			else {
				temp = temp.replace(/\t/g,"\t● ");
				temp = temp.replace(/● \t/g,"\t");
				temp = temp.replace(/\t\t● /g,"\t\t○ ");
				temp = temp.replace(/\t\t\t○ /g,"\t\t\t▪ ");
				temp = temp.replace(/\t\t\t\t▪ /g,"\t\t\t\t▫ ");
				temp = temp.replace(/\t\t\t\t\t▫ /g,"\t\t\t\t\t- ");
			}
			pseudoLists[i].innerHTML = temp;
		}
	}

	/* Converts the content of elements with the 'pseudo-todo' class to pseudo-to-do lists
	 * Pseudo-lists should be formatted with tabs as in the following example:
	 * <p class='pseudo-list'>Get groceries
	 * 	milk
	 * 	eggs
	 * 	butter
	 * 	cheese</p>
	 * 
	 * The first line is automatically formatted as bold and doesn't get a check-box if it's on the same line as the opening tag.
	 * To avoid this, just put it on its own line.
	 * 
	 */
	pseudoTodos = document.getElementsByClassName("pseudo-todo");
	plen = pseudoTodos.length;
	if (plen > 0) {
		for (i=0;i<plen;i++) {
			temp = pseudoTodos[i].innerHTML;
			temp = "<b>" + temp.replace(/\n/,"</b>\n");
			temp = temp.replace(/<b><\/b>\n/,"<input type='checkbox'>");
			temp = temp.replace(/\n/g,"\n<input type='checkbox'>");
			temp = temp.replace(/<input type='checkbox'>\t/g,"\t<input type='checkbox'>");
			temp = temp.replace(/<input type='checkbox'>\n/g,"\n");
			temp = temp.replace(/<input type='checkbox'>$/g,"\n");
			pseudoTodos[i].innerHTML = temp;
		}
	}

	/* Formats plain ordinal suffixes -st, -nd, -rd, -th as superscripts */
	temp = document.body.innerHTML;
	temp = temp.replace(/1st/g,"1<sup>st</sup>");
	temp = temp.replace(/2nd/g,"2<sup>nd</sup>");
	temp = temp.replace(/3rd/g,"3<sup>rd</sup>");
	temp = temp.replace(/4th/g,"4<sup>th</sup>");
	temp = temp.replace(/5th/g,"5<sup>th</sup>");	/* Do each ordinal with the numeral to avoid converting 'th' elsewhere */
	temp = temp.replace(/6th/g,"6<sup>th</sup>");
	temp = temp.replace(/7th/g,"7<sup>th</sup>");
	temp = temp.replace(/8th/g,"8<sup>th</sup>");
	temp = temp.replace(/9th/g,"9<sup>th</sup>");
	temp = temp.replace(/0th/g,"0<sup>th</sup>");
	document.body.innerHTML = temp;

	/* Converts supported characters following ^ to superscripts and following _ to subscripts */
	unicodeSuperAndSubscripts();

	/* Converts custom HTML entity names to their corresponding entities */
	customHtmlEntities();

	/* Converts pseudo-dashes (--, ---, etc.) to real dashes */
	pseudoDashes(); 
}

var supKbdCharacters = "0123456789+-=()ABDEGHIJKLMNOPRTUVWabcdefghijklmnoprstuvwxyzβγδθιψχɒɕðɜɟɡɥɨɩɪʝɭʟɱɰɲɳɴɵɸʂʃʉʊʋʌʐʑʒθɐɑɛŋɔɯ";
var supCharacters = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻᵝᵞᵟᶿᶥᵠᵡᶛᶝᶞᶟᶡᶢᶣᶤᶥᶦᶨᶩᶫᶬᶭᶮᶯᶰᶱᶲᶳᶴᶶᶷᶹᶺᶼᶽᶾᶿᵄᵅᵋᵑᵓᵚ";

var subKbdCharacters = "0123456789+-=()aehijklmnoprstuvx@βγρψχ";
var subCharacters    = "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓₔᵦᵧᵨᵩᵪ";

function unicodeSuperscripts() {
	var temp = document.body.innerHTML;
	klen = supKbdCharacters.length;
	for (i=0;i<klen;i++) {
		arr = temp.split("^"+supKbdCharacters[i]);
		temp = arr.join(supCharacters[i]);
	}
	document.body.innerHTML = temp; 
}

function unicodeSubscripts() {
	var temp = document.body.innerHTML;
	klen = subKbdCharacters.length;
	for (i=0;i<klen;i++) {
		arr = temp.split("_"+subKbdCharacters[i]);
		temp = arr.join(subCharacters[i]);
	}
	document.body.innerHTML = temp; 
}

function unicodeSuperAndSubscripts() {
	unicodeSuperscripts();
	unicodeSubscripts();
}

var HTMLcodes = "Ebreve	ebreve	Hdot	hdot	Ibreve	ibreve	istrok	Kdot	kdot	Obreve	obreve	Sdot	sudot	Tdot	tdot	tudot	Wuml	wuml	uelig	schwa	esh	ezh	rounda	opene	openo	Etilde	etilde	roundatilde	openetilde	openotilde	oeligtilde	smallcapi	shorti	smallcapy	shortu	horseshoe	wedge	tslig	dzlig	tSlig	dZlig	tsaff	dzaff	tSaff	dZaff	ipaph	ipagh	glot	phar	oomacr	oobreve	Bline	bline	Dline	dline	hline	Tline	tline	tap	A1	A2	A3	A4	E1	E2	E3	E4	I1	I2	I3	I4	O1	O2	O3	O4	U1	U2	U3	U4	V1	V2	V3	V4	a1	a2	a3	a4	e1	e2	e3	e4	i1	i2	i3	i4	o1	o2	o3	o4	u1	u2	u3	u4	v1	v2	v3	v4	YOGH	yogh	:)	:(	:|	WYNN	wynn	rupee	rouble	sun	mercury	venus	earth	Earth	moon	mars	vesta	juno	ceres	pallas	jupiter	saturn	uranus	Uranus	neptune	pluto	Menu	wrench	gear	edit	reload	warn	warning	cloud	box	checkbox	xbox	pointr	like	thumbup	thumbdown	scissors	rewind	fastforward	play	pause	stop	previous	next	repeat	shuffle	moneybag	windows	command	option	folder	Folder	shrug	info	Info	ref	!!	interro	menu	chap	chapter	backspace	delete	eject	return	document	keyboard	mouse	computer	floppy	bomb	longdivide	refresh	reload".split("	");
var entities  = "Ĕ	ĕ	Ḥ	ḥ	Ĭ	ĭ	ɨ	Ḳ	ḳ	Ŏ	ŏ	Ṣ	ṣ	Ṭ	ṭ	ṭ	Ẅ	ẅ	ᵫ	ə	ʃ	ʒ	ɑ	ɛ	ɔ	Ẽ	ẽ	ɑ̃	ɛ̃	ɔ̃	œ̃	ɪ	ɪ	ʏ	ʊ	ʊ	ʌ	ʦ	ʣ	ʧ	ʤ	t͡s	d͡z	t͡ʃ	d͡ʒ	ɸ	ɣ	ʔ	ʕ	o͞o	o͝o	Ḇ	ḇ	Ḏ	ḏ	ẖ	Ṯ	ṯ	ɾ	Ā	Á	Ǎ	À	Ē	É	Ě	È	Ī	Í	Ǐ	Ì	Ō	Ó	Ǒ	Ò	Ū	Ú	Ǔ	Ù	Ǖ	Ǘ	Ǚ	Ǜ	ā	á	ǎ	à	ē	é	ě	è	ī	í	ǐ	ì	ō	ó	ǒ	ò	ū	ú	ǔ	ù	ǖ	ǘ	ǚ	ǜ	Ȝ	ȝ	☺	☹	😐	Ƿ	ƿ	₹	₽	☉	☿	♀	⊕	♁	☽	♂	⚶	⚵	⚳	⚴	♃	♄	♅	⛢	♆	♇	≡	🔧	⚙	✎	⟳	⚠	⚠	☁	☐	☑	☒	☞	👍	👍	👎	✂	⏪	⏩	►	⏸	⏹	⏮	⏭	🔁	🔀	💰	❖	⌘	⌥	📁	📂	¯\\_(ツ)_/¯	ℹ	🛈	※	‼	‽	⁝	⸿	⸿	⌫	⌦	⏏	⏎	📄	🖮	🖰	🖳	🖫	💣	⟌	⟳	⟳".split("	");

function customHtmlEntities() {
	var temp = document.body.innerHTML;
	hlen = HTMLcodes.length;
	for (i=0;i<hlen;i++) {
		var arr = temp.split("&amp;" + HTMLcodes[i] + ";");
		temp = arr.join(entities[i]);
	}
	document.body.innerHTML = temp;
}

function pseudoDashes() {
 document.body.innerHTML = document.body.innerHTML
 .replace(/----/g,"―")
 .replace(/---/g,"—")
 .replace(/--/g,"–")
 .replace(/ - /g," ⁃ ")
 .replace(/	- /g, "	⁃ "); 
}

/*


*/