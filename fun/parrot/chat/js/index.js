function init() {
 console.clear();
 speak("Go ahead and say something to the parrot.");
}


var userName;
var smellJoke = false;
var knockKnockJoke = false;
var knockKnock2 = false;
var myKnockKnock = false;
var myKnockKnock2 = false;
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
    else if (inputText.match(/not.*\b(butt|poop|poopoo|pee|peepee|dumb|dummy|stupid)\b/gi))
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
 else if (inputText.match(/what.*you.*name/gi)) 
  logText("My name is Parrot.<br>What's your name?");
  else if (inputText.match(/I('m| am) your /gi))
    logText("I don't think so.");
 else if (inputText.match(/(my name('s| is))|(I('m| am)) /gi)) {
  userName = inputText.replace(/(my name( is|'s))|(I('m| am)) /gi, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   if (userName == "Luke")
     logText("Luke, I am your father!");
   else logText("Nice to meet you, " + userName + ".");
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
  else if (inputText.match(/^Smile!$/gi))
    logText("&#9787;");
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
  
  if (inputText == inputText.toUpperCase())
    logText("WHY ARE YOU SHOUTING?");




 document.querySelector("#in_txt").value = "";
 document.querySelector("#in_txt").focus();
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
  "'>" + text + "</p>";
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