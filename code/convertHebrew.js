function convertHebrew(matresLectionis) {
 Temp = document.getElementsByClassName("hebrew");
 tlen = Temp.length;
 for (var i=0;i<tlen;i++) {
  temp = Temp[i].innerHTML;
  temp = temp.replace(/<br>/g,"<BR>");
 
  temp = temp.replace(/^/g," ");
  temp = temp.replace(/$/g," ");
  temp = temp.replace(/^/g," ");
  temp = temp.replace(/$/g," ");
  temp = temp.replace(/\./g," . ");
  temp = temp.replace(/,/g," , ");
  temp = temp.replace(/:/g," : ");
  temp = temp.replace(/;/g," ; ");
  temp = temp.replace(/\?/g," ? ");
  temp = temp.replace(/!/g," ! ");
  temp = temp.replace(/-/g," - ");
  temp = temp.replace(/\[/g,"‘");
  temp = temp.replace(/\]/g,"’");

  temp = temp.replace(/KH/g,"K");
  temp = temp.replace(/PH/g,"P");
  temp = temp.replace(/TZ/g,"C");

  temp = temp.replace(/ch/g,"H");
  temp = temp.replace(/sh/g,"s");
  temp = temp.replace(/tz/g,"c");

  temp = temp.replace(/o't/g,"o’t");

  temp = temp.replace(/ a/g," ’a");
  temp = temp.replace(/ e/g," ’e");
  temp = temp.replace(/ A/g," ’A");
  temp = temp.replace(/ E/g," ’E");
  temp = temp.replace(/ i/g," ’y");
  temp = temp.replace(/ o/g," ’ow");
  temp = temp.replace(/ u/g," ’uw");

  temp = temp.replace(/a /g,"ah ");
  temp = temp.replace(/e /g,"eh ");
  temp = temp.replace(/A /g,"Ah ");
  temp = temp.replace(/E /g,"Eh ");

  temp = temp.replace(/ow/g,"wo");
  temp = temp.replace(/uw/g,"w");
  temp = temp.replace(/ai/g,"yy");
  temp = temp.replace(/vv/g,"ww");
  temp = temp.replace(/ v/g," w");
  temp = temp.replace(/v/g,"b");
  temp = temp.replace(/w/g,"v");
  temp = temp.replace(/kh/g,"k");
  temp = temp.replace(/KH/g,"K");
  temp = temp.replace(/f/g,"p");
  temp = temp.replace(/F/g,"P");

  temp = temp.replace(/k /g,"K ");
  temp = temp.replace(/m /g,"M ");
  temp = temp.replace(/n /g,"N ");
  temp = temp.replace(/p /g,"P ");
  temp = temp.replace(/c /g,"C ");

  temp = temp.replace(/'/g,"’");
  temp = temp.replace(/"/g,"‘");

  if (matresLectionis) {
   temp = temp.replace(/v?(o|u)v?/g,"v");
   temp = temp.replace(/iy?/g,"y");
   temp = temp.replace(/[aeAE]/g,"");
   temp = temp.replace(/`/g,"");
  }
  else {
   temp = temp.replace(/a/g,"ַ");
   temp = temp.replace(/A/g,"ָ");
   temp = temp.replace(/e/g,"ֵ");
   temp = temp.replace(/E/g,"ֶ");
   temp = temp.replace(/i/g,"ִ");
   temp = temp.replace(/o/g,"ֹ");
   temp = temp.replace(/u/g,"ֻ");
   temp = temp.replace(/`/g,"ְ");
  }



  temp = temp.replace(/’/g,"א");
  temp = temp.replace(/b/g,"ב");
  temp = temp.replace(/g/g,"ג");
  temp = temp.replace(/d/g,"ד");
  temp = temp.replace(/h/g,"ה");
  temp = temp.replace(/v/g,"ו");
  temp = temp.replace(/z/g,"ז");
  temp = temp.replace(/H/g,"ח");
  temp = temp.replace(/T/g,"ט");
  temp = temp.replace(/y/g,"י");
  temp = temp.replace(/k/g,"כ");
  temp = temp.replace(/K/g,"ך");
  temp = temp.replace(/l/g,"ל");
  temp = temp.replace(/m/g,"מ");
  temp = temp.replace(/M/g,"ם");
  temp = temp.replace(/n/g,"נ");
  temp = temp.replace(/N/g,"ן");
  temp = temp.replace(/S/g,"ס");
  temp = temp.replace(/‘/g,"ע");
  temp = temp.replace(/p/g,"פ");
  temp = temp.replace(/P/g,"ף");
  temp = temp.replace(/c/g,"צ");
  temp = temp.replace(/C/g,"ץ");
  temp = temp.replace(/q/g,"ק");
  temp = temp.replace(/r/g,"ר");
  temp = temp.replace(/s/g,"ש");
  temp = temp.replace(/t/g,"ת");

  temp = temp.replace(/^ /g,"");
  temp = temp.replace(/ $/g,"");
  temp = temp.replace(/ \./g,".");
  temp = temp.replace(/ ,/g,",");
  temp = temp.replace(/ :/g,":");
  temp = temp.replace(/ ;/g,";");
  temp = temp.replace(/ \?/g,"?");
  temp = temp.replace(/ !/g,"!");
  temp = temp.replace(/ - /g,"");

  Temp[i].innerHTML = temp;
 }
}