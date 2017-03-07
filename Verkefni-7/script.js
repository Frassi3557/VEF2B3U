var teljari = 0;

// Breytan breytir nafninu á milli Jakobs og Gunnars
function breytaNafni() {
  "use strict";
  teljari++;
  
  var strengur = document.getElementById('two').innerHTML;

  if(teljari % 2 != 0) {
    var breyti = strengur.replace("Gunnar", "Jakob"); 
    document.getElementById('two').innerHTML = breyti;
  }
  
  else {
    breyti = strengur.replace("Jakob", "Gunnar"); 
    document.getElementById('two').innerHTML = breyti;
  }
}

function jonKlasi() {
  "use strict";
  var strengur = document.getElementById('one');
  strengur.className += "active";
}

//Eyði div taginu sjálfu
function blessKaren() {
  "use strict";
  document.getElementById('three').outerHTML = "";
}



function shuffleArray(array) {
  let m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}