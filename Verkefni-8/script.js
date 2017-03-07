// Fall sem ruglar fylkjum, veldur því að mismunandi spurning birtist í hvert skipti sem síðan er hlaðin
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

(function() {
"use strict";

/* DOM element */
	let elContainer = document.getElementById('container'); 	

/* Smiður fyrir spurningu */
	function Question(question, answers, correctAnswer) {
		this.question = question; 					/* Spurning (strengur) */
		this.answers = answers; 					/* fylki með svarmöguleikum */
		this.correctAnswer = correctAnswer; 		/* Rétt svar (strengur) */
	}

/* Gögn (fylki af objectum) */
	let questions = [
				new Question('Hvaða ár var hljómsveitin stofnuð?', ['2008', '2009', '2010', '2011'], '2009'),
				new Question('Hvað heitir fyrsta plata hljómsveitarinnar?', ['Baldur', 'Með Vættum', 'Vögguvísur Yggdrasils'], 'Baldur'),
				new Question('Hvað eru margir gítarleikarar í hljómsveitinni?', ['3', '4'], '3'),
				new Question('Hvað heitir trommuleikarinn?', ['Baldur', 'Jón Geir', 'Björgvin', 'Gunnar'], 'Jón Geir'),
		];

/* Template */
	Question.prototype.getTemplate = function(){
	 	let tmplAnswers = "";
	 	for(let i = 0; i < this.answers.length; i++) {
	 		   tmplAnswers += "<div id=\"spurning\">" + this.answers[i] + "</div>";
	 	}
	 	return "<h1>" + this.question + "</h1>" + tmplAnswers;
	 		
	};

/* Birtum fyrstu spurningu samt svarmöguleikum úr fylkinu */
  
	elContainer.innerHTML = questions[0].getTemplate();
  
  elContainer.addEventListener("click", function() {
    var elContent = document.getElementById('spurning');
    elContent.className = "active";
}, false);  

})();