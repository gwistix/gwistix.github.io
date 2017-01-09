/* Converts pseudo-Arabic in tags marked with the 'quran' class to Arabic script */
function convertARA(totr) {
	KBD = [
		"l-th",
		"l-dh",
		"l-sh",
		"l-DH|l-Z",
		"l-t",
		"l-d",
		"l-r",
		"l-z",
		"l-s",
		"l-S",
		"l-D",
		"l-T",
		"l-n",
		"thth",
		"khkh|xx",
		"dhdh",
		"shsh",
		"DHDH|ZZ",
		"ghgh",
		"''",
		"bb",
		"tt",
		"jj",
		"HH",
		"dd",
		"rr",
		"zz",
		"ss",
		"SS",
		"DD",
		"TT",
		"``|cc",
		"ff",
		"qq",
		"kk",
		"ll",
		"mm",
		"nn",
		"hh",
		"ww",
		"yy",
		"th",
		"kh|x",
		"dh",
		"sh",
		"DH|Z",
		"gh",
		"'",
		"b",
		"t",
		"j",
		"H",
		"d",
		"r",
		"z",
		"s",
		"S",
		"D",
		"T",
		"`|c",
		"f",
		"q",
		"k",
		"l",
		"m",
		"n",
		"h",
		"w",
		"y",
		"p",
		"aaN",
		"aa",
		"uu|ou|oo",
		"ii|ee",
		"ai|ei",
		"aN",
		"uN",
		"iN",
		"a",
		"u|o",
		"i|e",
		"-",
		"\\*",
		"AA",
		"!",
		"A",
		"U",
		"I",
		"E",
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		",",
		";"
	];
	ARA = [
		"لثّ",
		"لذّ",
		"لشّ",
		"لظّ",
		"لتّ",
		"لدّ",
		"لرّ",
		"لزّ",
		"لسّ",
		"لصّ",
		"لضّ",
		"لطّ",
		"لنّ",
		"ثّ",
		"خّ",
		"ذّ",
		"شّ",
		"ظّ",
		"غّ",
		"آ",
		"بّ",
		"تّ",
		"جّ",
		"حّ",
		"دّ",
		"رّ",
		"زّ",
		"سّ",
		"صّ",
		"ضّ",
		"طّ",
		"عّ",
		"فّ",
		"قّ",
		"كّ",
		"لّ",
		"مّ",
		"نّ",
		"هّ",
		"وّ",
		"يّ",
		"ث",
		"خ",
		"ذ",
		"ش",
		"ظ",
		"غ",
		"ا",
		"ب",
		"ت",
		"ج",
		"ح",
		"د",
		"ر",
		"ز",
		"س",
		"ص",
		"ض",
		"ط",
		"ع",
		"ف",
		"ق",
		"ك",
		"ل",
		"م",
		"ن",
		"ه",
		"و",
		"ي",
		"ة",
		"ـًا",
		"َا",
		"ُو",
		"ِي",
		"َي",
		"ً",
		"ٌ",
		"ٍ",
		"َ",
		"ُ",
		"ِ",
		"",
		"ْ",
		"ٰ",
		"ٱ",
		"أَ",
		"أُ",
		"إِ",
		"ى",
		"٠",
		"١",
		"٢",
		"٣",
		"٤",
		"٥",
		"٦",
		"٧",
		"٨",
		"٩",
		"،",
		"؛"
	]

	if (totr) {Transcriptions = []; Transcriptions[0] = totr;}
	else Transcriptions = document.getElementsByClassName("quran");

	tlen = Transcriptions.length;
	if (tlen > 0) {
		for (i=0;i<tlen;i++) {
			temp = Transcriptions[i].innerHTML.replace(/<br>/g,"<BR>");
			alen = ARA.length;
			for (j=0;j<alen;j++) {
				kbd_char = new RegExp(KBD[j],"gm");
				temp = temp.replace(kbd_char,ARA[j]);
			}
	
			Transcriptions[i].innerHTML = temp;
		}
	}
}

/* Converts transcribed Hebrew in tags marked with the 'hebrew' class to Hebrew script */
function convertHEB(totr) {
	if (totr) {Temp = []; Temp[0] = totr;}
	else Temp = document.getElementsByClassName("hebrew");
	tlen = Temp.length;
	for (i=0;i<tlen;i++) {
		temp = Temp[i].innerHTML;
		temp = temp.replace(/<br>/g,"<BR>");

		temp = temp.replace(/^/g," ");
		temp = temp.replace(/$/g," ");
		temp = temp.replace(/\./g," . ");
		temp = temp.replace(/,/g," , ");
		temp = temp.replace(/:/g," : ");
		temp = temp.replace(/;/g," ; ");
		temp = temp.replace(/\?/g," ? ");
		temp = temp.replace(/!/g," ! ");
		temp = temp.replace(/-/g," - ");

		temp = temp.replace(/KH/g,"K");
		temp = temp.replace(/PH/g,"P");
		temp = temp.replace(/TZ/g,"Ṣ");

		temp = temp.replace(/bh/g,"ḇ");
		temp = temp.replace(/gh/g,"ḡ");
		temp = temp.replace(/dh/g,"ḏ");
		temp = temp.replace(/ow/g,"ô");
		temp = temp.replace(/uw/g,"û");
		temp = temp.replace(/ch/g,"ḥ");
		temp = temp.replace(/kh/g,"ḵ");
		temp = temp.replace(/ph/g,"p̄");
		temp = temp.replace(/tz/g,"ṣ");
		temp = temp.replace(/sh/g,"š");
		temp = temp.replace(/th/g,"ṯ");
		temp = temp.replace(/H/g,"ḥ");
		temp = temp.replace(/T/g,"ṭ");
		temp = temp.replace(/î/g,"iy");
		temp = temp.replace(/s/g,"ś");
		temp = temp.replace(/S/g,"s");
		temp = temp.replace(/`/g,"‘");

		temp = temp.replace(/\(e\)/g,"ə");
		temp = temp.replace(/\(E\)/g,"ĕ");
		temp = temp.replace(/\(a\)/g,"ă");
		temp = temp.replace(/\(A\)/g,"ă̊");

		temp = temp.replace(/A/g,"å");
		temp = temp.replace(/E/g,"è");

/*
		temp = temp.replace(/ḇ/g,"בֿ");
		temp = temp.replace(/ḡ/g,"גֿ");
		temp = temp.replace(/ḏ/g,"דֿ");
		temp = temp.replace(/ḵ/g,"כֿ");
		temp = temp.replace(/KH/g,"ךֿ");
		temp = temp.replace(/p̄/g,"פֿ");
		temp = temp.replace(/PH/g,"ףֿ");
		temp = temp.replace(/ṯ/g,"תֿ");
*/

		temp = temp.replace(/(k|ḵ) /g,"K ");
		temp = temp.replace(/m /g,"M ");
		temp = temp.replace(/n /g,"N ");
		temp = temp.replace(/(p|p̄) /g,"P ");
		temp = temp.replace(/ṣ /g,"Ṣ ");

		temp = temp.replace(/ḇ/g,"ב");
		temp = temp.replace(/ḡ/g,"ג");
		temp = temp.replace(/ḏ/g,"ד");
		temp = temp.replace(/ḵ/g,"כ");
		temp = temp.replace(/K/g,"ך");
		temp = temp.replace(/p̄/g,"פ");
		temp = temp.replace(/P/g,"ף");
		temp = temp.replace(/ṯ/g,"ת");

		temp = temp.replace(/ ''/g,"ְאְ");
		temp = temp.replace(/'' /g,"ְא ");
		temp = temp.replace(/’’/g,"אּ");
		temp = temp.replace(/bb/g,"בּ");
		temp = temp.replace(/gg/g,"גּ");
		temp = temp.replace(/dd/g,"דּ");
		temp = temp.replace(/hh/g,"הּ");
		temp = temp.replace(/(ww|û)/g,"וּ");
		temp = temp.replace(/zz/g,"זּ");
		temp = temp.replace(/ḥḥ/g,"חּ");
		temp = temp.replace(/ṭṭ/g,"טּ");
		temp = temp.replace(/yy/g,"יּ");
		temp = temp.replace(/kk/g,"כּ");
		temp = temp.replace(/KK/g,"ךּ");
		temp = temp.replace(/ll/g,"לּ");
		temp = temp.replace(/mm/g,"מּ");
		temp = temp.replace(/MM/g,"םּ");
		temp = temp.replace(/nn/g,"נּ");
		temp = temp.replace(/NN/g,"ןּ");
		temp = temp.replace(/ss/g,"סּ");
		temp = temp.replace(/‘‘/g,"עּ");
		temp = temp.replace(/pp/g,"פּ");
		temp = temp.replace(/PP/g,"ףּ");
		temp = temp.replace(/ṣṣ/g,"צּ");
		temp = temp.replace(/ṢṢ/g,"ץּ");
		temp = temp.replace(/qq/g,"קּ");
		temp = temp.replace(/rr/g,"רּ");
		temp = temp.replace(/śś/g,"שּׂ");
		temp = temp.replace(/šš/g,"שּׁ");
		temp = temp.replace(/tt/g,"תּ");

		temp = temp.replace(/'ə/g,"’ə");
		temp = temp.replace(/'ĕ/g,"’ĕ");
		temp = temp.replace(/'ă/g,"’ă");
		temp = temp.replace(/'ă̊/g,"’ă̊");

		temp = temp.replace(/ə'/g,"ə’");
		temp = temp.replace(/ĕ'/g,"ĕ’");
		temp = temp.replace(/ă'/g,"ă’");
		temp = temp.replace(/ă̊'/g,"ă̊’");

		temp = temp.replace(/ə/g,"ְ");
		temp = temp.replace(/ĕ/g,"ֱ");
		temp = temp.replace(/ă/g,"ֲ");
		temp = temp.replace(/ă̊/g,"ֳ");

		temp = temp.replace(/'a/g,"’a");
		temp = temp.replace(/'A/g,"’A");
		temp = temp.replace(/'e/g,"’e");
		temp = temp.replace(/'E/g,"’E");
		temp = temp.replace(/'i/g,"’i");
		temp = temp.replace(/'o/g,"’o");
		temp = temp.replace(/'u/g,"’u");

		temp = temp.replace(/a'/g,"a’");
		temp = temp.replace(/å'/g,"å’");
		temp = temp.replace(/e'/g,"e’");
		temp = temp.replace(/è'/g,"è’");
		temp = temp.replace(/i'/g,"i’");
		temp = temp.replace(/o'/g,"o’");
		temp = temp.replace(/u'/g,"u’");

		temp = temp.replace(/ô/g,"וֹ");

		temp = temp.replace(/a/g,"ַ");
		temp = temp.replace(/å/g,"ָ");
		temp = temp.replace(/e/g,"ֵ");
		temp = temp.replace(/è/g,"ֶ");
		temp = temp.replace(/i/g,"ִ");
		temp = temp.replace(/o/g,"ֹ");
		temp = temp.replace(/u/g,"ֻ");
		temp = temp.replace(/'/g,"ְ");

		temp = temp.replace(/’/g,"א");
		temp = temp.replace(/b/g,"ב");
		temp = temp.replace(/g/g,"ג");
		temp = temp.replace(/d/g,"ד");
		temp = temp.replace(/h/g,"ה");
		temp = temp.replace(/w/g,"ו");
		temp = temp.replace(/z/g,"ז");
		temp = temp.replace(/ḥ/g,"ח");
		temp = temp.replace(/ṭ/g,"ט");
		temp = temp.replace(/y/g,"י");
		temp = temp.replace(/k/g,"כ");
		temp = temp.replace(/K/g,"ך");
		temp = temp.replace(/l/g,"ל");
		temp = temp.replace(/m/g,"מ");
		temp = temp.replace(/M/g,"ם");
		temp = temp.replace(/n/g,"נ");
		temp = temp.replace(/N/g,"ן");
		temp = temp.replace(/s/g,"ס");
		temp = temp.replace(/‘/g,"ע");
		temp = temp.replace(/p/g,"פ");
		temp = temp.replace(/P/g,"ף");
		temp = temp.replace(/ṣ/g,"צ");
		temp = temp.replace(/Ṣ/g,"ץ");
		temp = temp.replace(/q/g,"ק");
		temp = temp.replace(/r/g,"ר");
		temp = temp.replace(/ś/g,"שׂ");
		temp = temp.replace(/š/g,"שׁ");
		temp = temp.replace(/t/g,"ת");

		temp = temp.replace(/^ /g,"");
		temp = temp.replace(/ $/g,"");
		temp = temp.replace(/ \. /g,".");
		temp = temp.replace(/ , /g,",");
		temp = temp.replace(/ : /g,":");
		temp = temp.replace(/ ; /g,";");
		temp = temp.replace(/ \? /g,"?");
		temp = temp.replace(/ ! /g,"!");
		temp = temp.replace(/ - /g,"-");

		Temp[i].innerHTML = temp;
	}
}