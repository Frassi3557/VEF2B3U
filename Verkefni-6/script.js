function Spurning(spurning, svar1, svar2, svar3, svar) {
  this.spurning = spurning;
  this.svar1 = svar1;
  this.svar2 = svar2;
  this.svar3 = svar3:
  this.rettSvar = rettSvar;
  
  this.birtaSpurningu = function() {
   document.write(this.spurning  + this.svar1); 
  }
}

var spurning1 = new Spurning('Hvar er Senegal ?', 'Asíu', 'Evrópu', 'Afríku', this.svar3);
spurning1.birtaSpurningu(); 
