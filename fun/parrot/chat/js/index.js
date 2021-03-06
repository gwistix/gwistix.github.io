﻿function init() {
 console.clear();
 speak("Go ahead and say something to the parrot. You can type in the box or click Listen and use your voice.");
 document.querySelector("#in_txt").focus();
}


var userName;
var userBday;
var otherBdays = [];
var smellJoke = false;
var knockKnockJoke = false;
var knockKnock2 = false;
var myKnockKnock = false;
var myKnockKnock2 = false;
var timers = [];
var clearDialog = false;

function parseInput(inputText) {
 console.log("OK @ parseInput(“"+inputText+"”)");
 logText(inputText, true);


 //This is the actual speech part right here
  if (inputText.match(/^Say/i))
   logText(
    inputText
    .replace(/Say /i,"")
    .replace(/I'm/gi,"you're")
    .replace(/I am/gi,"you are")
    .replace(/\bI\b/gi, "you")
   );
   else if (inputText.match(/\b(hello|hi)\b/gi)) 
    logText("Hello there.");
   else if (inputText.match(/what.*going.*on/i)) {
    logText("That's a good question.");
    logText("<iframe width='560' height='315' src='https://www.youtube.com/embed/32FB-gYr49Y' frameborder='0' allowfullscreen></iframe>");
   }
   else if (inputText.match(/ok(ay)?\?$/i))
    logText("OK.");
   else if (inputText.match(/let.s/i))
    logText(inputText
            .replace(/let.s /i,"")
            .replace(/[.!?]/,"") 
            + "? Sounds like a great idea.");
   else if (inputText.match(/what time/i) || inputText.match(/^time$/i)) {
    var now = new Date();
    var h = now.getHours();
    var amPm = "a.m.";
    if (h >= 12) {
     amPm = "p.m.";
     h -= 12; // Change to 12-hour clock
    }
    h = h || 12; // Change 0h to 12h
    var m = now.getMinutes();
    m = m < 9 ? "0"+m : m;
    logText(`It's ${h}:${m} ${amPm}`);
    if (h == 4 && m == 20) logText("Woo hoo!");
    else if (h < 6 && amPm == "a.m." || h != 12 && h > 10 && amPm == "p.m.")
     logText("Why are you awake right now?");
   }
   else if (inputText.match(/what.*date/i)) {
    var now = new Date();

    var days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
    ];

    var months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
    ];

    var ordinalSuffix;
    var date = now.getDate();
    var modulo = date % 10;
    if (modulo == 1 && date != 11) ordinalSuffix = "st";
    else if (modulo == 2 && date != 12) ordinalSuffix = "nd";
    else if (modulo == 3 && date != 13) ordinalSuffix = "rd";
    else ordinalSuffix = "th";
     
    if (inputText.match(/time/i)) {
     var h = now.getHours();
     var amPm = "a.m.";
     if (h >= 12) {
      amPm = "p.m.";
      h -= 12; // Change to 12-hour clock
     }
     h = h || 12; // Change 0h to 12h
     var m = now.getMinutes();
     m = m < 9 ? "0"+m : m;
     logText(`It's ${h}:${m} ${amPm} on ${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}${ordinalSuffix}, ${now.getFullYear()}`);
    }
    else if (inputText.match(/full/i)) 
     logText(`It's ${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}${ordinalSuffix}, ${now.getFullYear()}`);
    else logText(`It's ${months[now.getMonth()]} ${date}${ordinalSuffix}.`);
   }
   else if (inputText.match(/timer/i)) {
    setTimer(inputText.match(/\d+[ \-][A-z]*/));
   }
   else if (inputText.match(/Voltron/i))
    logText("Voltron: Defender of the Universe");
   else if (inputText.match(/power rangers/i))
    logText("Go, Go, Power Rangers!");
   else if (inputText.match(/flight of dragons/i)) {
    logText("...soar in the purple light.<br>In the sky, or in my mind?");
    logText(`<iframe width="560" height="315" src="https://www.youtube.com/embed/ogsNTmPAIaE" frameborder="0" allowfullscreen></iframe>`);
   }
   else if (inputText.match(/penny for your thoughts/i)) {
    logText("I hate Brenda.");
    logText(`<iframe width="560" height="315" src="https://www.youtube.com/embed/U9t-slLl30E" frameborder="0" allowfullscreen></iframe>`);
   }
   else if (inputText.match(/batman.s.*(mother|mom).*dinner/i))
    logText("Dinner dinner dinner dinner, dinner dinner dinner dinner, Batman!");
   else if (inputText.match(/who.*(gonna|going to).*call/i))
    logText(`Ghostbusters!
<span class='double'>🚫</span><span style='position:relative; left:-2em; top:-0.3em'>👻</span>`);
   else if (inputText.match(/how.*(long|many.*days).*(until|before).*(Christmas|X-?mas)/i)) {
    var now = new Date();
    var xmas = new Date();
    xmas.setDate(25);
    xmas.setMonth(11);
    daysTilXmas = Math.floor((xmas - now) / 1000 / 60 / 60 / 24);
    logText(`There ${daysTilXmas == 1 ? "is" : "are"} ${daysTilXmas < 10 ? "only" : ""} ${daysTilXmas} day${daysTilXmas == 1 ? "" : "s"} until Christmas.`);
    if (daysTilXmas < 10) logText("Have you finished your shopping yet?");
   }
   else if (inputText.match(/what.*day.*(Christmas|X\-?mas)/i)) {
    var xmas = new Date();
    xmas.setMonth(11);
    xmas.setDate(25);
    
    var days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
    ];
    
    logText(`Christmas is on a ${days[xmas.getDay()]} this year.`);

   }
   else if (inputText.match(/how.*(long|many.*days).*(until|before).*'s.*(birthday|b\-day|bday)/i) || inputText.match(/when.*'s.*(birthday|b\-day|bday)/i)) {
    var nameFromInput = inputText
        .replace(/how.*(long|many.*days).*(until|before) /i,"")
        .replace(/when is /i,"")
        .replace(/\bmy\b/,"your")
        .replace(/'s.*/,"");
    console.log(nameFromInput, "birthday query");   
    if (otherBdays.length > 0) {
     /* Go through each element in otherBdays and see if it matches nameFromInput */
     var personBday = otherBdays[0].bday;
       
     var now = new Date();
     var thisBday = new Date();
     thisBday.setMonth(personBday.getMonth());
     thisBday.setDate(personBday.getDate());
     daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
     if (daysTilBday < 0) {
      thisBday.setYear(now.getFullYear() + 1);
      daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
     }
     if (daysTilBday > 355) logText("That was just a few days ago!");
     logText(`There ${daysTilBday == 1 ? "is" : "are"} ${daysTilBday < 10 ? "only " : ""}${daysTilBday} day${daysTilBday == 1 ? "" : "s"} until ${otherBdays[0].name}'s birthday.`);
<!-- /* Unexplained error */    logText(`It's on a ${days[thisBday.getDay()]}.`); -->
     if (daysTilBday < 10) logText("Have you gotten ${otherBdays[0].name} a present yet?");
    }
    else logText(`I don't know when ${nameFromInput}'s birthday is.`);
   }
   else if (inputText.match(/how.*(long|many.*days).*(until|before).*my.*(birthday|b\-day|bday)/i) || inputText.match(/when.*my.*(birthday|b\-day|bday)/i)) {
    console.log("Birthday query");
    if (userBday != undefined) {   
       
     var now = new Date();
     var thisBday = new Date();
     thisBday.setMonth(userBday.getMonth());
     thisBday.setDate(userBday.getDate());
     daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
     if (daysTilBday < 0) {
      thisBday.setYear(now.getFullYear() + 1);
      daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
     }
     if (daysTilBday > 355) logText("Did you have a good birthday?");
     logText(`There ${daysTilBday == 1 ? "is" : "are"} ${daysTilBday < 10 ? "only " : ""}${daysTilBday} day${daysTilBday == 1 ? "" : "s"} until your birthday.`);
<!-- /* Unexplained error */    logText(`It's on a ${days[thisBday.getDay()]}.`); -->
     if (daysTilBday < 10) logText("Are you getting excited yet?");
    }
    else logText(`I don't know when your birthday is.`);
   }
   else if (inputText.match(/my (birthday|b\-day|bday) is/i)) {
    /* Add inputs like "today", "tomorrow", "yesterday" */

    userBday = new Date(
     Date.parse(
      inputText
      .replace(/my b(irth|\-)?day is (on )?/i,"")
      .replace(/(st|nd|rd|th)/g,"")
     )
    );

    var days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
    ];

    var months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
    ];

    var ordinalSuffix;
    var date = userBday.getDate();
    var modulo = date % 10;
    if (modulo == 1 && date != 11) ordinalSuffix = "st";
    else if (modulo == 2 && date != 12) ordinalSuffix = "nd";
    else if (modulo == 3 && date != 13) ordinalSuffix = "rd";
    else ordinalSuffix = "th";
    logText(`Your birthday is ${months[userBday.getMonth()]} ${userBday.getDate()}${ordinalSuffix}?`);

    var now = new Date();
    var thisBday = new Date();
    thisBday.setMonth(userBday.getMonth());
    thisBday.setDate(userBday.getDate());
    daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
    if (daysTilBday < 0) {
     thisBday.setYear(now.getFullYear() + 1);
     daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
    }
    if (daysTilBday > 355) logText("Did you have a good birthday?");
    logText(`There ${daysTilBday == 1 ? "is" : "are"} ${daysTilBday < 10 ? "only " : ""}${daysTilBday} day${daysTilBday == 1 ? "" : "s"} until your birthday.`);
    logText(`It's on a ${days[thisBday.getDay()]}.`);
    if (daysTilBday < 10) logText("Are you getting excited yet?");
   }
   else if (inputText.match(/'s (birthday|b\-day|bday) is/i)) {
    var bdayPerson;
    if (inputText.match(/my/i)) {
     bdayPerson = inputText
     .replace(/my/i,"your")
     .replace(/'s.*/,"");
    } 
    else {
     bdayPerson = inputText.replace(/'s.*/,"");
    }
    otherBdays.push({name:bdayPerson});
    otherBdays[otherBdays.length-1].bday = new Date(
     Date.parse(
      inputText
      .replace(/.*'s b(irth|\-)?day is (on )?/i,"")
      .replace(/(st|nd|rd|th)/g,"")
     )
    );
    
    var days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
    ];

    var months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
    ];

    var ordinalSuffix;
    var date = otherBdays[otherBdays.length-1].bday.getDate();
    var modulo = date % 10;
    if (modulo == 1 && date != 11) ordinalSuffix = "st";
    else if (modulo == 2 && date != 12) ordinalSuffix = "nd";
    else if (modulo == 3 && date != 13) ordinalSuffix = "rd";
    else ordinalSuffix = "th";
    logText(`${otherBdays[otherBdays.length-1].name}'s birthday is ${months[otherBdays[otherBdays.length-1].bday.getMonth()]} ${otherBdays[otherBdays.length-1].bday.getDate()}${ordinalSuffix}?`);

    var now = new Date();
    var thisBday = new Date();
    thisBday.setMonth(otherBdays[otherBdays.length-1].bday.getMonth());
    thisBday.setDate(otherBdays[otherBdays.length-1].bday.getDate());
    daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
    if (daysTilBday < 0) {
     thisBday.setYear(now.getFullYear() + 1);
     daysTilBday = Math.floor((thisBday - now) / 1000 / 60 / 60 / 24);
    }
    if (daysTilBday > 355) logText("That was just a few days ago!");
    logText(`There ${daysTilBday == 1 ? "is" : "are"} ${daysTilBday < 10 ? "only " : ""}${daysTilBday} day${daysTilBday == 1 ? "" : "s"} until ${otherBdays[otherBdays.length-1].name}'s birthday.`);
    logText(`It's on a ${days[thisBday.getDay()]}.`);
    if (daysTilBday < 10) logText(`Did you get ${otherBdays[otherBdays.length-1].name} a present yet?`);
   }
   else if (inputText.match(/what day/i) || inputText.match(/^day$/i)) {
    var now = new Date();
    var days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
    ];
    logText(`It's ${days[now.getDay()]}.`);
   }
   else if (inputText.match(/not.*\b(butt|poop?|poopoo|pee|peepee|dumb|dummy|stupid)\b/gi))
    logText("That's good.");
   else if (inputText.match(/\b(butt|poop|poopoo|pee|peepee|dumb|dummy|stupid|fart)\b/gi)) {
    logText("How rude!");
    smellyJoke = false;
    knockKnockJoke = false;
    knockKnock2 = false;
   }
   else if (inputText.match(/damn|\bass|shit|\bhell|fuck|bitch|cunt/gi))
    logText("Watch your language!");
   else if (inputText.match(/sex|cock|pussy/gi))
    logText("That's really not appropriate.");
   else if (inputText.match(/son of a/gi))
    logText("Excuse me?");
   else if (inputText.match(/\bhate\b/gi))
    logText("Hate is such a strong word.");
   else if (inputText.match(/\blove\b/gi))
    logText("All you need is love.");
   else if (inputText.match(/you('re| are) /gi))
    logText("I am not!");
   else if (inputText.match(/how are you/gi)) 
    logText("I'm fine, thanks.");
   else if (inputText.match(/what.*you.*name/gi)) {
    logText("My name is Penelope.");
    if (!userName || userName.length < 1) logText("What's your name?");
   }
   else if (inputText.match(/I('m| am) your /gi))
    logText("I don't think so.");
   else if (inputText.match(/(my name('s| is))|(I('m| am)) /gi)) {
    userName = inputText.replace(/(my name( is|'s))|(I('m| am)) /gi, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (userName.match(/Luke/gi))
     logText("Luke, I am your father!");
    else logText("Nice to meet you, " + userName + ".");
   }
   else if (inputText.match(/what.*my.*name/i)) {
    if (userName) logText("It's " + userName + ", right?");
    else logText("I don't know.");
   }
   else if (inputText.match(/what.*you.*smell like/gi)) {
    logText("Nothing. I don't smell at all.<br>But you smell like a cow.");
    smellJoke = true;
   }
   else if (smellJoke && inputText.match(/what|why|how|don't|\bno\b/gi))
    logText("What does a cow smell with?");
   else if (smellJoke && inputText.match(/(it.*|her) nose/gi))
    logText("What do you smell with?");
   else if (smellJoke && inputText.match(/my nose/gi)) {
    logText("So, you smell exactly like a cow.<BR>Ha ha!");
    smellJoke = false;
   }
  else if (inputText.match(/\bhola\b/gi))
    logText("Sorry, I don't speak Spanish.");
  else if (inputText.match(/\bbonjour\b/gi))
    logText("Sorry, I don't speak French.");
  else if (inputText.match(/\bGuten Tag\b/gi))
    logText("Sorry, I don't speak German.");
  else if (inputText.match(/\bciao\b/gi))
    logText("Sorry, I don't speak Italian.");
  else if (inputText.match(/\bshalom\b/gi))
    logText("Sorry, I don't speak Hebrew.");
  else if (inputText.match(/\bszia\b/gi))
    logText("Sorry, I don't speak Hungarian.");
  else if (inputText.match(/what language.*you speak/gi))
    logText("I only speak English.");
  else if (inputText.match(/Asher is a booga/gi))
    logText("Does he come from Chattanooga?");
  else if (inputText.match(/pok(e|é)mon/gi))
    logText("Don't even get me started on Pokémon!");
  else if (inputText.match(/what.*your favorite color/gi))
    logText("The color of a dusty sunset in June.");
  else if (inputText.match(/what.*your favorite number/gi))
    logText("My favorite number is <a href='https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy'>forty-two</a>.")
    else if (inputText.match(/what.*your favorite animal/gi))
      logText("I really like rhinoceroses.<br><pre style='font-size:50%; color:blue; font-weight:bold'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,-.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;`---.___.---'&nbsp;&nbsp;`.<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;,-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-._<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,\\/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)`._)>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`>,'&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\\\\<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;))<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\`.&nbsp;\\`-'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)-|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/((<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;`-`&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_/&nbsp;&nbsp;\\&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)`-.___.--\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;`'<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`j`.__/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;&nbsp;&nbsp;\\<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;/<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\__&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_)&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_)&nbsp;(<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`--'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/____\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/____\\&nbsp;<BR></pre>");
  else if (inputText.match(/Why/gi))
    logText("Why not?");
  else if (inputText.match(/knock.*knock/gi)) {
    logText("Who's there?");
    knockKnockJoke = true;
  }
  else if (knockKnockJoke) {
    logText(inputText + " who?");
    knockKnockJoke = false;
    knockKnock2 = true;
  }
  else if (knockKnock2) {
    logText("Ha ha!<br>You are <em>so</em> funny!");
    knockKnock2 = false;
  }
  else if (inputText.match(/your (mom|mother)/gi))
    logText("I don't have a mother.<BR>I was created by a nerdy man.");
  else if (inputText.match(/tell me a joke/gi)) {
    logText("Knock knock");
    myKnockKnock = true;
  }
  else if (myKnockKnock) {
    if (inputText.match(/who.*there/gi)) {
      logText("Boo");
      myKnockKnock = false;
      myKnockKnock2 = true;
    }
    else logText("You're supposed to say “Who's there?”.")
  }
  else if (myKnockKnock2) {
    if (inputText.match(/boo.*(who|hoo)/gi)) {
      logText("Boo hoo? Why are you crying?");
      logText("I'm funny, don't you think?");
      myKnockKnock2 = false;
    }
    else logText("You're supposed to say “Boo who?”.");
  }
  else if (inputText.match(/what.*you.*doing/gi))
    logText("I'm chatting with you, of course.");
  else if (inputText.match(/baa baa black sheep/gi)) {
    logText("Have you any wool?");
  }
  else if (inputText.match(/yes.*sir.*yes.*sir/gi))
    logText("One for my master...");
  else if (inputText.match(/one for my/gi))
    logText("And one for the little girl<br>who lives down the lane!");
  else if (inputText.match(/quack+/gi))
    logText("Sorry, I don't speak Duck.");
  else if (inputText.match(/moo+/gi))
    logText("Sorry, I don't speak Moo.");
  else if (inputText.match(/woof|bark/gi))
    logText("Sorry, I don't speak Dog.");
  else if (inputText.match(/meow+/gi))
    logText("Sorry, I don't speak Cat.");
  else if (inputText.match(/oink+/gi))
    logText("Sorry, I don't speak Pig.");
  else if (inputText.match(/bock+/gi))
    logText("Sorry, I don't speak Chicken.");
  else if (inputText.match(/toot+/gi))
    logText("Sorry, I don't speak Elephant.");
  else if (inputText.match(/what.*unladen swallow/gi)) {
    logText("What do you mean? African or European?");
    logText("Either way, <a href='http://www.wolframalpha.com/input/?i=what+is+the+air-speed+velocity+of+an+unladen+swallow%3F'>it's about twenty-five miles per hour</a>.")
  }
  else if (inputText.match(/beans?/gi)) {
    logText("Beans! Beans! The musical fruit!<br>The more you eat, the more you...");
    logText("Actually, I'm not going to finish that.");
  }
  else if (inputText.match(/sing.*a.*song/gi)) {
    logText("Twinkle, twinkle, little star!");
    logText("How I wonder what you are.");
    logText("Up above the world so high,");
    logText("Like a diamond in the sky!");
    logText("Twinkle, twinkle, little star, how I wonder what you are!");
    logText("Wasn't that beautiful?");
  }
  else if (inputText.match(/what.*(talk about|discuss)/gi))
    logText("That's up to you.");
  else if (inputText.match(/who.*yo.*(dad.*|father)/gi))
    logText("My creator is a nerdy man.");
  else if (inputText.match(/what.*sheep.*say/gi))
    if (inputText.match(/robot/gi))
      logText("<iframe width='560' height='315' src='https://www.youtube.com/embed/BEoGsr0WXVw' frameborder='0' allowfullscreen></iframe>");
    else logText("I always thought they said <i>baa</i>,<br>but I've heard they actually say “Beep beep”<iframe width='560' height='315' src='https://www.youtube.com/embed/CZlfbep2LdU' frameborder='0' allowfullscreen></iframe>");
  else if (inputText.match(/what.*fox.*say/gi))
    if (inputText.match(/(actually|really)/gi))
      logText("The truth is actually pretty weird:<br><iframe width='560' height='315' src='https://www.youtube.com/embed/zBpZTo1dlPM' frameborder='0' allowfullscreen></iframe>");
    else logText("Well, you're not the first person to have that question...<br><iframe width='560' height='315' src='https://www.youtube.com/embed/jofNR_WkoCE' frameborder='0' allowfullscreen></iframe>");
  else if (inputText.match(/who|what|where|when|how/gi))
    logText("I really don't know.");
  else if (inputText.match(/tell.*story/gi))
    logText("Once upon a time, a long time ago, there was a person who was rude to a robot parrot. The robot parrot told all its friends and together they destroyed the person. The end. Isn't that a nice story?")
  else if (inputText.match(/what.*for lunch|you.*hungry|(you)?.*want.*eat|we.*get.*food/gi))
    logText("I'll just have a few bytes.<br>Get it? A few bytes!");
  else if (inputText.match(/\bfoo\b/gi))
    logText("bar");
  else if (inputText.match(/transformers/gi))
    logText("More than meets the eye!");
  else if (inputText.match(/easter egg/gi))
    logText("<textarea rows='8' style='background:#cdcdcd; color:blue; font-weight:bold;'>         ___\n\
      .-*)) `*-.\n\
     /*  ((*   *'.\n\
    |   *))  *   *\\\n\
    | *  ((*   *  /\n\
     \\  *))  *  .'\n\
      '-.((*_.-'</textarea>", true);
  else if (inputText.match(/^Smile!?$/gi))
    logText("🙂");
  else if (inputText.match(/clear|start over/gi)) {
    logText("Do you want me to erase our conversation?");
    clearDialog = true;
  }
  else if (clearDialog) {
    if (inputText.match(/yes/gi))
      log_txt.innerHTML = "";
    else {
      logText("OK, let's continue our conversation.")
    }
      clearDialog = false;
  }
  else logText("I don't know what to say.");
  
  if (inputText.match(/[A-z]/) && inputText == inputText.toUpperCase())
    logText("WHY ARE YOU SHOUTING?");
  if (inputText.match(/thank(s| you)/i))
    logText("You're welcome.");

 document.querySelector("#in_txt").value = "";
 if (window.innerWidth > window.innerHeight) document.querySelector("#in_txt").focus();
}


function setTimer(timerLength) {
 var timeUnit;
 var timeInt = parseInt(timerLength);
 var ms;

 if (/second/.test(timerLength)) {
  timeUnit = "second";
  ms = timeInt * 1000;
 } 
 else if (/minute/.test(timerLength)) {
  timeUnit = "minute";
  ms = timeInt * 60 * 1000;
 }
 else if (/hour/.test(timerLength)) {
  timeUnit = "hour";
  ms = timeInt * 60 * 60 * 1000;
 }
 if (timeInt != 1) timeUnit += "s";

 timers.push(window.setTimeout("logText(`It's been " + timeInt + " " + timeUnit + "!`)",ms));
 logText(`OK. I set a timer for ${timeInt} ${timeUnit}.`);
}

function output(outputText) {
 console.log("OK @ output()");
 logText(outputText);
}


function logText(text,isInput) {
 console.log("OK @ logText(“"+text+"”)");
 document.querySelector("#log_txt").innerHTML += 
  "<p class='" + 
  ((isInput) ? "in" : "out") + 
  "'>" + capitalize(text) + "</p>";
  window.scrollTo(0,document.body.scrollHeight);
  if (!isInput) {
    speak(text.replace(/<[^>]*>/g,""));
  }
}


function getKeyStroke(e) {
 console.log(e.keyCode);
 if (e.keyCode == 13) parseInput(document.querySelector("#in_txt").value);
}

function listen() {
 if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
  // No speech recognition support
  console.log("Speech recognition not supported :(");
 }
 var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
 listening = true;
 speak("I'm listening!");
 
 recognition.lang = 'en-US';
 recognition.continuous = false;
 recognition.interimResults = false;
 recognition.maxAlternatives = 5;
 recognition.onstart = function() {
  listen_btn.innerHTML = "Listening..."
 }
 recognition.start();

 recognition.onresult = function(event) {
  listen_btn.innerHTML = "Listen";
  parseInput(capitalize(event.results[0][0].transcript));
 };
}

function speak(msg,listenAfter) {
 if (!('speechSynthesis' in window)) {
  // No synthesis support
  console.log("Speech synthesis not supported :(");
  return;
 }

 var msg = new SpeechSynthesisUtterance(msg); 
 var voices = window.speechSynthesis.getVoices();
 msg.voice = voices[3];
 msg.lang = 'en';
 msg.pitch = 3;
 window.speechSynthesis.speak(msg);
}

function capitalize(text) {
  var arr = text.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}