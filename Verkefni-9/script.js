(function() {
"use strict";

	let elContainer = document.getElementById('container'); 	

	function Question(question, answers, correctAnswer) {
		this.question = question; 	
		this.answers = answers; 					
		this.correctAnswer = correctAnswer; 	
	}

	let questions = [
				new Question('Hvaða ár var hljómsveitin Skálmöld stofnuð?', ['2008', '2009', '2010', '2011'], '2009'),
				new Question('Hvað heitir fyrsta plata Skálmaldar?', ['Baldur', 'Með Vættum', 'Vögguvísur Yggdrasils'], 'Baldur'),
				new Question('Hvað eru margir gítarleikarar í Skálmöld?', ['3', '4'], '3'),
				new Question('Hvað heitir trommuleikarinn í Skálmöld?', ['Baldur', 'Jón Geir', 'Björgvin', 'Gunnar'], 'Jón Geir'),
		];

  
	function shuffleArray(array) {
	 let m = array.length, t, i;
	 while (m) {
			 i = Math.floor(Math.random() * m--);
			 t = array[m];
			 array[m] = array[i];
			 array[i] = t;
	 }
	}

	shuffleArray(questions);  
  

	Question.prototype.getTemplate = function(){
	 	let tmplAnswers = "";
	 	for(let i = 0; i < this.answers.length; i++) {
      if(this.answers[i] == this.correctAnswer)
      {
        tmplAnswers += "<div id='correct'>" + this.answers[i] + "</div>";
      }
      else 
      {
	 		   tmplAnswers += "<div id='active'>" + this.answers[i] + "</div>";
      }
	 	}
	 	return "<h2>" + this.question + "</h2>" + tmplAnswers;	
	};
  

  var $counter = 0;
  
  var score = 0;
  var wrongAnswers = 0;
      
	elContainer.innerHTML = questions[$counter].getTemplate();
 


elContainer.addEventListener('click', function(e) {
   var elCorrectAnswer = document.getElementById('correct');
  if(e.target == elCorrectAnswer) 
  {
    e.target.style.backgroundColor = "green";
    score++;
    alert("Rétt");
	}
  else 
  {
    e.target.style.backgroundColor = "red";
    wrongAnswers++;
    alert("Rangt");
  }
    $counter++;
    elContainer.innerHTML = questions[$counter].getTemplate();
});
  
elContainer.addEventListener('click', function(e) {
  if($counter == 4) {
    elContainer.innerHTML = "";
    document.write("Rétt svör: ", score, "<br>", "Röng svör: ", wrongAnswers);
  }
});

})();