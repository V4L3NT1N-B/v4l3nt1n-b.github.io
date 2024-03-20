//listeSortA = [Amelioration, Annulation, Arc, Bouclier, "Cellule animale", "Cellule vegetale", Dispersion, Eau, Electricité, Epee, Feu, "Gemme d/"arcanes", Glace, Inversion, Lumiere, Maladie, Metal, Mort, Ombre, Pierre, Protection, Putrefaction, Reflexion, Resurrection, Sang, Sceptre, Suspension, Terre, Vent];
//listeSortB = [Amelioration, Annulation, Arc, Bouclier, "Cellule animale", "Cellule vegetale", Dispersion, Eau, Electricité, Epee, Feu, "Gemme d/"arcanes", Glace, Inversion, Lumiere, Maladie, Metal, Mort, Ombre, Pierre, Protection, Putrefaction, Reflexion, Resurrection, Sang, Sceptre, Suspension, Terre, Vent];

var nomEffet;
var effet;

$("html").ready(function(){

	console.log("html ready");

	$("#comboForm").submit(function(e){
		e.preventDefault();

		var password = $("#comboForm #password").val();

		if(password == "591483"){
			window.location.href = 'combos.html'; 
		}
	});
});
