//listeSortA = [Amelioration, Annulation, Arc, Bouclier, "Cellule animale", "Cellule vegetale", Dispersion, Eau, Electricité, Epee, Feu, "Gemme d/"arcanes", Glace, Inversion, Lumiere, Maladie, Metal, Mort, Ombre, Pierre, Protection, Putrefaction, Reflexion, Resurrection, Sang, Sceptre, Suspension, Terre, Vent];
//listeSortB = [Amelioration, Annulation, Arc, Bouclier, "Cellule animale", "Cellule vegetale", Dispersion, Eau, Electricité, Epee, Feu, "Gemme d/"arcanes", Glace, Inversion, Lumiere, Maladie, Metal, Mort, Ombre, Pierre, Protection, Putrefaction, Reflexion, Resurrection, Sang, Sceptre, Suspension, Terre, Vent];

var nomEffet;
var effet;

$("html").ready(function(){

	console.log("html ready");

	$("#comboForm").submit(function(e){
		e.preventDefault();

		console.log("submit ok");

		var sortA = $("#comboForm #sortA").val();
		var sortB = $("#comboForm #sortB").val();

		//vider le texte de l'effet précédent
		$( ".nomCombo" ).empty();
		$( ".effetCombo" ).empty();

		//COMBOS
			//AMELIORATION
		if(sortA == "Amelioration" && sortB == "Amelioration"){
			$( ".nomCombo" ).append("Perfection");
			$( ".effetCombo" ).append("Triplez les dés d'un sort ou d'un combo que vous avez activé lors de cet assaut.");
		};

		if(sortA == "Amelioration" && sortB == "Annulation" || sortA =="Annulation" && sortB == "Amelioration" || sortA == "Annulation" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Abolition");
			$( ".effetCombo" ).append("Annule un effet d'un combo ou d'un sort activé par le joueur adverse lors de cet assaut.");
		};

		if(sortA == "Amelioration" && sortB == "Arc" || sortA =="Arc" && sortB == "Amelioration" || sortA == "Arc" && sortB == "Arc"){
			$( ".nomCombo" ).append("Gandiva");
			$( ".effetCombo" ).append("Vous pouvez cibler jusqu'à 4 régions. Ajoutez 9Dd à votre pool de dés. Vous gagnez 5 points de Prestige.");
		};

		if(sortA == "Amelioration" && sortB == "Bouclier" || sortA =="Bouclier" && sortB == "Amelioration" || sortA == "Bouclier" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Boucliers anciles");
			$( ".effetCombo" ).append("Doublez les points de Prestige donnés par les dégats faits durant le tour. Gagnez un nombre de prestique égal au nombre d'élève qui activent un combo lors de cet assaut.");
		};

		if(sortA == "Amelioration" && sortB == "Cellule animale" || sortA =="Cellule animale" && sortB == "Amelioration" || sortA == "Cellule animale" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Fécondation,Reproduction,resurrection,Doppleganger");
			$( ".effetCombo" ).append("");
		};

		if(sortA == "Amelioration" && sortB == "Cellule vegetale" || sortA =="Cellule vegetale" && sortB == "Amelioration" || sortA == "Cellule vegetale" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Wolffia microscopica");
			$( ".effetCombo" ).append("Ajoutez 3DE et 4DEau à votre pool de dés.");
			$( ".nomCombo" ).append("Bambou");
			$( ".effetCombo" ).append("Ajoutez 5DB à votre pool de dés, si vous avez lancez ce combo lors d'un assaut précédent ajoutez 8DB à la place (non cumulable).");
			$( ".nomCombo" ).append("Victoria");
			$( ".effetCombo" ).append("Ajoutez 3DEau à votre pool de dés et gagnez 2PP. OU Empêche le placement d'états sur votre plateau.");
			
		};

		if(sortA == "Amelioration" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Amelioration" || sortA == "Dispersion" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Éparpillement");
			$( ".effetCombo" ).append("Tous les effectifs d'une région ciblée peuvent être replacés dans les régions adjacentes à celle-ci.");
		};

		if(sortA == "Amelioration" && sortB == "Eau" || sortA =="Eau" && sortB == "Amelioration" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Océan");
			$( ".effetCombo" ).append("Ajoutez 3DEau à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Feu" || sortA =="Feu" && sortB == "Amelioration" || sortA == "Feu" && sortB == "Feu"){
			$( ".nomCombo" ).append("Brasier");
			$( ".effetCombo" ).append("Ajoutez 3DFeu à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Amelioration" || sortA == "Electricite" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Éclair");
			$( ".effetCombo" ).append("Ajoutez 3DE et 2Dd à votre pool de dés. Si un sort Métal ou Eau est présent dans région ciblée, ajoutez, 6DE et 3Dd.");
		};

		if(sortA == "Amelioration" && sortB == "Epee" || sortA =="Epee" && sortB == "Amelioration" || sortA == "Epee" && sortB == "Epee"){
			$( ".nomCombo" ).append("Balisarde");
			$( ".effetCombo" ).append("Ajoutez 5Dd à votre pool de dés. Vos Dd sont insensibles aux DB adverses.");
		};

		if(sortA == "Amelioration" && sortB == "Feu" || sortA =="Feu" && sortB == "Amelioration" || sortA == "Feu" && sortB == "Feu"){
			$( ".nomCombo" ).append("Brasier");
			$( ".effetCombo" ).append("Ajoutez 3DFeu à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Amelioration" || sortA == "Gemme d'arcane" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Source d/'arcanes");
			$( ".effetCombo" ).append("Vous pouvez activer un combo gratuitement. Détruisez une gemme du combo à la fin de l'assaut.");
		};

		if(sortA == "Amelioration" && sortB == "Glace" || sortA =="Glace" && sortB == "Amelioration" || sortA == "Glace" && sortB == "Glace"){
			$( ".nomCombo" ).append("Banquise");
			$( ".effetCombo" ).append("Permet de jouer tous vos sorts Eau comme s'ils étaient des sorts Glace.");
		};

		if(sortA == "Amelioration" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Amelioration" || sortA == "Inversion" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Détérioration");
			$( ".effetCombo" ).append("Supprimez un type de dé de la pool adverse");
		};

		if(sortA == "Amelioration" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Amelioration" || sortA == "Lumiere" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Rayon");
			$( ".effetCombo" ).append("Ajoutez 2DE à votre pool de dés. Vos DE peuvent ciblés des tourelles qui ne peuvent pas l'être.");
		};

		if(sortA == "Amelioration" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Amelioration" || sortA == "Maladie" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Peste");
			$( ".effetCombo" ).append("Chaque tourelle d'une région ciblée subit un état Maladie.");
		};

		if(sortA == "Amelioration" && sortB == "Metal" || sortA =="Metal" && sortB == "Amelioration" || sortA == "Metal" && sortB == "Metal"){
			$( ".nomCombo" ).append("Iridium");
			$( ".effetCombo" ).append("Votre plateau ne subit aucun effet, états ou dégâts des combos entièrement élémentaires.");
		};

		if(sortA == "Amelioration" && sortB == "Mort" || sortA =="Mort" && sortB == "Amelioration" || sortA == "Mort" && sortB == "Mort"){
			$( ".nomCombo" ).append("Suicide");
			$( ".effetCombo" ).append("Tous les joueurs subissent 4DM qu'ils répartissent comme ils le souhaitent.");
		};

		if(sortA == "Amelioration" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Amelioration" || sortA == "Ombre" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Ténèbres");
			$( ".effetCombo" ).append("Aucun sort ou combo lumière ne peut cibler votre plateau.");
		};

		if(sortA == "Amelioration" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Amelioration" || sortA == "Pierre" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Soutien");
			$( ".effetCombo" ).append("Ajoutez 3DR à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Protection" || sortA =="Protection" && sortB == "Amelioration" || sortA == "Protection" && sortB == "Protection"){
			$( ".nomCombo" ).append("Bouclier");
			$( ".effetCombo" ).append("Votre plateau est protégé de 7 points de dégâts.");
		};

		if(sortA == "Amelioration" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Amelioration" || sortA == "Putrefaction" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Décomposition");
			$( ".effetCombo" ).append("Ajoutez 2DD à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Amelioration" || sortA == "Reflexion" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Répercussion");
			$( ".effetCombo" ).append("Chaque réussite que subit le joueur adverse est subie par le joueur attaquant.");
		};

		if(sortA == "Amelioration" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Amelioration" || sortA == "Resurrection" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Métempsycose ");
			$( ".effetCombo" ).append("Ajoutez 1DRe à votre pool de dés. Si réussite, sacrifiez un des élèves du combo, celui-ci se réincarne en directeur. Ainsi, si votre directeur devait mourir lors de cet assaut, il ne meurt pas. Si votre directeur survit et que votre lancé est une réussite, vous perdez tout de même un élève.");
		};

		if(sortA == "Amelioration" && sortB == "Sang" || sortA =="Sang" && sortB == "Amelioration" || sortA == "Sang" && sortB == "Sang"){
			$( ".nomCombo" ).append("Rituel");
			$( ".effetCombo" ).append("Vous pouvez tuer autant d’élève que vous avez. Le joueur adverse doit en tuer autant.");
		};

		if(sortA == "Amelioration" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Amelioration" || sortA == "Sceptre" && sortB == "Sceptre"){
			$( ".nomCombo" ).append("Tenka sansō");
			$( ".effetCombo" ).append("Vous invoquez les trois grandes lances du Japon. Choisissez entre l'un des effets suivants : <br>- Tonbogiri : Vous pouvez détruire un sort biomage présent sur le plateau adverse. Ajoutez 8Dd à votre pool de dés,<br>- Nihon-gô : vous gagnez 12 Points de Prestige,<br>- Otegine : 20DM, il faut cibler deux régions adjacentes.ajoutez 12Dd et 6DD à votre pool de dés à la place.");
		};

		if(sortA == "Amelioration" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Amelioration" || sortA == "Suspension" && sortB == "Suspension"){
			$( ".nomCombo" ).append("Interruption");
			$( ".effetCombo" ).append("La phase 4- Assaut prend immédiatement fin pour tous les joueurs.");
		};

		if(sortA == "Amelioration" && sortB == "Terre" || sortA =="Terre" && sortB == "Amelioration" || sortA == "Terre" && sortB == "Terre"){
			$( ".nomCombo" ).append("Montagne");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés.");
		};

		if(sortA == "Amelioration" && sortB == "Vent" || sortA =="Vent" && sortB == "Amelioration" || sortA == "Vent" && sortB == "Vent"){
			$( ".nomCombo" ).append("Bourrasque");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");
		};

			//ANNULATION
		if(sortA == "Annulation" && sortB == "Arc" || sortA =="Arc" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Arc durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Bouclier" || sortA =="Bouclier" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Bouclier durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Cellule animale" || sortA =="Cellule animale" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Cellule animale durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Cellule vegetale" || sortA =="Cellule vegetale" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Cellule végétale durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Dispersion durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Eau" || sortA =="Eau" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Eau durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Électricité durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Epee" || sortA =="Epee" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Épée durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Feu" || sortA =="Feu" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Feu durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Gemme d'arcane durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Glace" || sortA =="Glace" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Glace durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Inversion durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Lumière durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Maladie durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Metal" || sortA =="Metal" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Métal durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Mort" || sortA =="Mort" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Mort durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Ombre durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Pierre durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Protection" || sortA =="Protection" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Protection durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Putréfaction durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Réflexion durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Résurrection durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Sang" || sortA =="Sang" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Sang durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Sceptre durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Suspension durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Terre" || sortA =="Terre" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Terre durant cette attaque.");
		};
		
		if(sortA == "Annulation" && sortB == "Vent" || sortA =="Vent" && sortB == "Annulation"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Vent durant cette attaque.");
		};

			//ARC			
		if(sortA == "Arc" && sortB == "Bouclier" || sortA =="Bouclier" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc et Bouclier d'Ull");
			$( ".effetCombo" ).append("Vous ne pouvez pas être la cible de combo Eau. Ajoutez 5Dd à votre pool de dés.");
		};
		/*
		if(sortA == "Arc" && sortB == "Cellule animale" || sortA =="Cellule animale" && sortB == "Arc" || sortA == "Cellule animale" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Cellule animale durant cette attaque.");
		};
		
		if(sortA == "Arc" && sortB == "Cellule vegetale" || sortA =="Cellule vegetale" && sortB == "Arc" || sortA == "Cellule vegetale" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Cellule végétale durant cette attaque.");
		};
		*/
		if(sortA == "Arc" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Arc"){
			$( ".nomCombo" ).append("Indastra");
			$( ".effetCombo" ).append("Ajoutez un nombre de Dd égal au triple d'effectif archéomage sur votre plateau.");
		};
		
		if(sortA == "Arc" && sortB == "Eau" || sortA =="Eau" && sortB == "Arc" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Varunastra");
			$( ".effetCombo" ).append("Ajoutez 6DEau et 4Dd à votre pool de dés.");
		};
		
		if(sortA == "Arc" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc de Péroun");
			$( ".effetCombo" ).append("Ajoutez un nombre de Dd égal au quadruple de sorts électricité placés sur votre plateau.");
		};
		
		if(sortA == "Arc" && sortB == "Epee" || sortA =="Epee" && sortB == "Arc"){
			$( ".nomCombo" ).append("Armée de Sekhmet");
			$( ".effetCombo" ).append("Ajoutez 10Dd et 3DFeu à votre pool de dés");
		};
		
		if(sortA == "Arc" && sortB == "Feu" || sortA =="Feu" && sortB == "Arc"){
			$( ".nomCombo" ).append("Agneyastra");
			$( ".effetCombo" ).append("Ajoutez 6DFeu à votre pool de dés. Les états Incendie ne peuvent pas être supprimés ce tour-ci.");
		};
		
		if(sortA == "Arc" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Arc"){
			$( ".nomCombo" ).append("Robin des Bois");
			$( ".effetCombo" ).append("Partagez de manière équitable l'Arcane de tous les joueurs. Si tous les stocks ne peuvent être égaux alors le joueur actif décide de la répartition du surplus.");
		};
		
		if(sortA == "Arc" && sortB == "Glace" || sortA =="Glace" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc de Skadi");
			$( ".effetCombo" ).append("Vous permet de réutiliser l'arc pour un autre combo et de doubler les dés de ce combo.");
		};
		
		if(sortA == "Arc" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Arc"){
			$( ".nomCombo" ).append("Narayanastra");
			$( ".effetCombo" ).append("Ajoutez à votre pool de dés un nombre de Dd égal au double de DB utilisés par le joueur adverse.");
		};
		
		if(sortA == "Arc" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc d'Apollon");
			$( ".effetCombo" ).append("Vous pouvez cibler deux régions. Ajoutez 5Dd et 2 états Maladie à votre pool de dés.");
		};
		
		if(sortA == "Arc" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc de Pâris");
			$( ".effetCombo" ).append("Chaque tourelle de la région où se trouve le Directeur subit un état Maladie.");
		};
		
		if(sortA == "Arc" && sortB == "Metal" || sortA =="Metal" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc de Cupidon");
			$( ".effetCombo" ).append("L'adversaire ciblé perd 6 points de Prestige.");
		};
		
		if(sortA == "Arc" && sortB == "Mort" || sortA =="Mort" && sortB == "Arc"){
			$( ".nomCombo" ).append("Vijaya");
			$( ".effetCombo" ).append("Vous gagnez 20 arcanes. Vous pouvez replacer deux sorts élémentaires sur votre plateau ou un seul sort élémentaire d'un plateau adverse.");
		};
		
		if(sortA == "Arc" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Arc"){
			$( ".nomCombo" ).append("Antardhana Astra");
			$( ".effetCombo" ).append("Ciblez 2 régions de votre plateau, elles sont inciblables pour ce tour.");
		};
		
		if(sortA == "Arc" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc d'Artemis");
			$( ".effetCombo" ).append("Si un combo Cellule animale adverse est activé lors de cet assaut, ajoutez 8DD à votre pool de dés. Sinon ajoutez 8Dd à la place.");
		};
		
		if(sortA == "Arc" && sortB == "Protection" || sortA =="Protection" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc d'Haïk");
			$( ".effetCombo" ).append("Ajoutez 13Dd à votre pool de dés.");
		};
		
		if(sortA == "Arc" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc de Philoctète");
			$( ".effetCombo" ).append("Le joueur ciblé perd 3 de Prestige et reçoit 2 états Putréfaction.");
		};
		
		if(sortA == "Arc" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Arc"){
			$( ".nomCombo" ).append("Teen Baan");
			$( ".effetCombo" ).append("Vous pouvez cibler jusqu'à 2 régions. Ciblez une de vos régions, elle ne peut être la cible de sort et de combos lors de cet assaut. Ajoutez 3DD à votre pool de dés.");
		};
		
		if(sortA == "Arc" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Arc"){
			$( ".nomCombo" ).append("Message dEthalidès");
			$( ".effetCombo" ).append("Le joueur ciblé doit vous montrer (et seulement à vous) dans quelle région son Directeur se trouve.");
		};
		
		if(sortA == "Arc" && sortB == "Sang" || sortA =="Sang" && sortB == "Arc"){
			$( ".nomCombo" ).append("Flèches d'Hercules");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés. Le joueur adverse subit un nombre d'états Maladie égal au nombre de réussite de vos Dd.");
		};
		
		if(sortA == "Arc" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc et Corne de Svantovit");
			$( ".effetCombo" ).append("Vous gagnez 25 arcanes. Ajoutez 7Dd à votre pool de dés.");
		};
		
		if(sortA == "Arc" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arash");
			$( ".effetCombo" ).append("Ajoutez un nombre de DD égal au nombre de région que vous ciblez.");
		};
		
		if(sortA == "Arc" && sortB == "Terre" || sortA =="Terre" && sortB == "Arc"){
			$( ".nomCombo" ).append("Arc d'Ulysse");
			$( ".effetCombo" ).append("Chaque joueur adverse perd 1 élève. Lors de la prochaine phase 5- Recrutement, les adversaires ne peuvent pas recruter.");
		};
		
		if(sortA == "Arc" && sortB == "Vent" || sortA =="Vent" && sortB == "Arc"){
			$( ".nomCombo" ).append("Vayuvyastra");
			$( ".effetCombo" ).append("Enlevez tous les pions du plateau adverse et répartissez-les de manière aléatoire.");
		};

			//BOUCLIER					
		if(sortA == "Bouclier" && sortB == "Cellule animale" || sortA =="Cellule animale" && sortB == "Bouclier" || sortA == "Cellule animale" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Peau du Lion de Némée");
			$( ".effetCombo" ).append("Vous ne subissez aucun dégât des DM ce tour-ci.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Cellule vegetale" || sortA =="Cellule vegetale" && sortB == "Bouclier" || sortA == "Cellule vegetale" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Suppression");
			$( ".effetCombo" ).append("Le joueur adverse ne peut activer ni de sorts ni de combos Cellule végétale durant cette attaque.");
		};
		
		if(sortA == "Bouclier" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Indastra");
			$( ".effetCombo" ).append("Ajoutez un nombre de Dd égal au triple d'effectif Bouclierhéomage sur votre plateau.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Eau" || sortA =="Eau" && sortB == "Bouclier" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Bouclier de Lancelot");
			$( ".effetCombo" ).append("Ajoutez 3DEau à votre pool de dés. Vous pouvez relancer 3 dés de votre pool. Vous pouvez recruter 3 élèves lors de cet assaut.");
		};
		
		if(sortA == "Bouclier" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Égide de Zeus");
			$( ".effetCombo" ).append("Ajoutez 4DAir et 9Dd à votre pool de dés.");
		};
		
		if(sortA == "Bouclier" && sortB == "Epee" || sortA =="Epee" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Crocea Mors");
			$( ".effetCombo" ).append("Ajoutez 8Dd et 6DD à votre pool de dés. Après votre assaut, donnez votre sort Épée au joueur adverse.");
		};
		
		if(sortA == "Bouclier" && sortB == "Feu" || sortA =="Feu" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Svalinn");
			$( ".effetCombo" ).append("Ciblez une région de votre plateau, celle-ci ne peut subir d'états Incendie. Puis, supprimez 2 états Incendie de votre plateau.");
		};
		
		if(sortA == "Bouclier" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("???");
			$( ".effetCombo" ).append("Vous êtes protégé de tous les dégâts. Pour chaque dégâts arrêté de cette manière, gagnez 1 arcane. Défaussez la carte Gemme d’arcane.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Glace" || sortA =="Glace" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Bouclier de Skadi");
			$( ".effetCombo" ).append("Vous permet de réutiliser l'Bouclier pour un autre combo et de doubler les dés de ce combo.");
		};
		
		if(sortA == "Bouclier" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Narayanastra");
			$( ".effetCombo" ).append("Ajoutez à votre pool de dés un nombre de Dd égal au double de DB utilisés par le joueur adverse.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Prière de Mikaël ?");
			$( ".effetCombo" ).append("???");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Bouclier de Pâris");
			$( ".effetCombo" ).append("Chaque tourelle de la région où se trouve le Directeur subit un état Maladie.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Metal" || sortA =="Metal" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Bouclier d'Achilles'");
			$( ".effetCombo" ).append("Ajoutez 6DE et 3DB à votre pool de dés. Vous gagnez 3 points de Prestige.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Mort" || sortA =="Mort" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Fils");
			$( ".effetCombo" ).append("Ajoutez 12DE à votre pool de dés.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Fils du vide/Nuit noireau");
			$( ".effetCombo" ).append("Ajoutez 12DE à votre pool de dés.");
		};
		
		if(sortA == "Bouclier" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Égide d'Athéna");
			$( ".effetCombo" ).append("Ajoutez 4DE et 4DAir à votre pool de dés.");
		};
		
		if(sortA == "Bouclier" && sortB == "Protection" || sortA =="Protection" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Voile d'Ino");
			$( ".effetCombo" ).append("Ajoutez 5DB à votre pool de dés. Supprimez deux états Maladie de votre plateau.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Bouclier de Philoctète");
			$( ".effetCombo" ).append("Le joueur ciblé perd 3 de Prestige et reçoit 2 états Putréfaction.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Yata no kagami");
			$( ".effetCombo" ).append("Choisissez un combo que l'adversaire a activé durant cet assaut, appliquez ses effets. Piochez 3 cartes Sort et gardez-en 2 en main.");
		};
		
		if(sortA == "Bouclier" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Damasène");
			$( ".effetCombo" ).append("Ajoutez 6DRe à votre pool de dés. S'il y a un élève archéomage parmi les élèves ressuscités. Vous pouvez lancer un combo archéomagique (pour la moitié de son coût en arcane) avec cet élève.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Sang" || sortA =="Sang" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Flèches d'Hercules");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés. Le joueur adverse subit un nombre d'états Maladie égal au nombre de réussite de vos Dd.");
		};
		
		if(sortA == "Bouclier" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Bouclier et Corne de Svantovit");
			$( ".effetCombo" ).append("Vous gagnez 25 Bouclieranes. Ajoutez 7Dd à votre pool de dés.");
		};
		
		if(sortA == "Bouclier" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Arash");
			$( ".effetCombo" ).append("Ajoutez un nombre de DD égal au nombre de région que vous ciblez.");
		};
		*/
		if(sortA == "Bouclier" && sortB == "Terre" || sortA =="Terre" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Dôme");
			$( ".effetCombo" ).append("Le joueur est protégé de tous les adversaires pendant 3 tours. A la fin du 3e tour, lancez 6Dd que vous appliquez à votre plateau.");
		};
		/*
		if(sortA == "Bouclier" && sortB == "Vent" || sortA =="Vent" && sortB == "Bouclier"){
			$( ".nomCombo" ).append("Vayuvyastra");
			$( ".effetCombo" ).append("Enlevez tous les pions du plateau adverse et répartissez-les de manière aléatoire.");
		};
		*/

		//CELLULE ANIMALE					
		if(sortA == "Cellule animale" && sortB == "Cellule vegetale" || sortA =="Cellule vegetale" && sortB == "Cellule animale" || sortA == "Cellule vegetale" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Cafard");
			$( ".effetCombo" ).append("Ajoutez 5DE, ces dés ne peuvent être supprimés de la pool.");
			
			$( ".nomCombo" ).append("Cancer");
			$( ".effetCombo" ).append("Ajoutez 6DM à votre pool de dés.");

			$( ".nomCombo" ).append("Fourmi");
			$( ".effetCombo" ).append("Volez 15 arcanes du plus gros stock.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Eau" || sortA =="Eau" && sortB == "Cellule animale" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Requin");
			$( ".effetCombo" ).append("Ajoutez 6DM à votre pool de dés.");
			
			$( ".nomCombo" ).append("Pieuvre");
			$( ".effetCombo" ).append("Ajoutez 6DE à votre pool de dés.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Anquille");
			$( ".effetCombo" ).append("Ajoutez 6DM à votre pool de dés.");
			
			$( ".nomCombo" ).append("Murène de Licionus");
			$( ".effetCombo" ).append("Ciblez les régions où y a de l'eau. Ajoutez 8Dd à votre pool de dés.");

			$( ".nomCombo" ).append("Ornithorynque");
			$( ".effetCombo" ).append("Vous pouvez cibler les tourelles inciblables.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Epee" || sortA =="Epee" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Huàying");
			$( ".effetCombo" ).append("Vous pouvez copier et appliquer les effets d'un autre combo biomage.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Feu" || sortA =="Feu" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Faucon Bérigora");
			$( ".effetCombo" ).append("Ajoutez 6DFeu à votre pool de dés.");
			
			$( ".nomCombo" ).append("Milan Noir");
			$( ".effetCombo" ).append("Si le joueur adverse possède un état Incendie sur son plateau, il doit ajouter un état Incendie sur les deux régions adjacentes.");

			$( ".nomCombo" ).append("Milan siffleur");
			$( ".effetCombo" ).append("Si le joueur adverse possède un état Incendie dans la région ciblé, ajouter 7DM à votre pool de dés.");
		};
		/*
		if(sortA == "Cellule animale" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule animale" && sortB == "Glace" || sortA =="Glace" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Baleine");
			$( ".effetCombo" ).append("Ajoutez 5DD à votre pool de dés.");
			
			$( ".nomCombo" ).append("Orque");
			$( ".effetCombo" ).append("Ajoutez 8Dd à votre pool de dés. ");

			$( ".nomCombo" ).append("Phoque");
			$( ".effetCombo" ).append("Si sort Eau dans la zone ciblée, le joueur adverse doit désigner jusqu'à deux tourelles sur lesquelles se trouve 2 professeurs ou 3 tourelles parmi lesquelles il y a le directeur ?");
		};
		
		if(sortA == "Cellule animale" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Cellule végétale");
			$( ".effetCombo" ).append("Le sort Cellule animale devient cellule végétale jusqu'à la fin du tour.");
	
		};
		
		if(sortA == "Cellule animale" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Phytoplancton bioluminescent");
			$( ".effetCombo" ).append("Ajoutez 2DEau à votre pool de dés. Vous gagnez 12 arcanes et 2 points de Prestige.");
			
			$( ".nomCombo" ).append("Poisson lanterne");
			$( ".effetCombo" ).append("Vous choisissez une région de votre plateau que l'adverse doit cibler. OU Ajoutez 6DE à votre pool de dés.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Rat");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés. Pour chaque réussite parmi vos DE, le joueur adverse subit un état Maladie.");
			
			$( ".nomCombo" ).append("Moustique");
			$( ".effetCombo" ).append("Le joueur adverse subit un état Maladie sur chaque tourelle adjacente à une tourelle portant déjà un état Maladie.");
		};
		/*
		if(sortA == "Cellule animale" && sortB == "Metal" || sortA =="Metal" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule animale" && sortB == "Mort" || sortA =="Mort" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Mouche");
			$( ".effetCombo" ).append("Ajoutez 3DE pour chaque effectif mort lors de ce tour.");
			
			$( ".nomCombo" ).append("Vautour");
			$( ".effetCombo" ).append("Ajoutez 2DM pour chaque effectif mort lors de ce tour.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Chauve-souris");
			$( ".effetCombo" ).append("Pour chaque sort ombre présent sur tous les plateaux, ajoutez 2 états Inciblables sur votre plateau.");
			
			$( ".nomCombo" ).append("Poisson lanterne");
			$( ".effetCombo" ).append("Si vous avez le sort Lumière sur votre plateau ajoutez 8DM à votre pool de dés, sinon ajoutez 5DM à la place.");

			$( ".nomCombo" ).append("Poisson abyssal");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés. Si vous avez 3 réussites parmi vos DE, les écoles adjacentes au joueur ciblé sont elles aussi touchées et subissent un état Entrave que les joueurs placent où ils veulent.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Fossile");
			$( ".effetCombo" ).append("Vous pouvez, pour ce tour, aller chercher un élève du cimetière et l'utiliser.");
			
		};
		
		if(sortA == "Cellule animale" && sortB == "Protection" || sortA =="Protection" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Phagocyte");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie.");
			
			$( ".nomCombo" ).append("Lymphocyte");
			$( ".effetCombo" ).append("Ajoutez un nombre de DEau égal au double de jeton Maladie présents sur votre plateau.");

			$( ".nomCombo" ).append("Monocyte");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie de la pool adverse.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Mouche");
			$( ".effetCombo" ).append("Pour chaque état Putréfaction présent sur votre plateau, ajoutez 2 états Inciblables sur votre plateau.");
			
			$( ".nomCombo" ).append("Asticot");
			$( ".effetCombo" ).append("Pour chaque état Putréfaction présent sur votre plateau, vous pouvez ajouter un PdD à la tourelle pour supprimez l'état.");

			$( ".nomCombo" ).append("Cloporte");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie. Vous pouvez cibler toutes les régions adverses touchées par Putréfaction.");
		};
		/*
		if(sortA == "Cellule animale" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule animale" && sortB == "Sang" || sortA =="Sang" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Piranha");
			$( ".effetCombo" ).append("Ajoutez 10DM à votre pool de dés. Si le sort Sang est présent sur le plateau adverse, vous devez cibler cette région.");
			
			$( ".nomCombo" ).append("Chauve-souris vampire");
			$( ".effetCombo" ).append("Vous pouvez relancer 6DM.");

			$( ".nomCombo" ).append("Moustique");
			$( ".effetCombo" ).append("Le joueur adverse subit 2 états Maladie.");
		};
		/*
		if(sortA == "Cellule animale" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule animale" && sortB == "Terre" || sortA =="Terre" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Taupe");
			$( ".effetCombo" ).append("Le joueur adverse défausse le lieu Jardin s'il le possède. Vous pouvez inverser la position de 2 sorts sur n'importe quel plateau.");
			
			$( ".nomCombo" ).append("Termite");
			$( ".effetCombo" ).append("Ajoutez 6DR à votre pool de dés pour chaque sort Terre présent sur votre plateau.");
		};
		
		if(sortA == "Cellule animale" && sortB == "Vent" || sortA =="Vent" && sortB == "Cellule animale"){
			$( ".nomCombo" ).append("Moineau");
			$( ".effetCombo" ).append("Ajoutez 2 états Inciblable sur votre plateau.");
			
			$( ".nomCombo" ).append("Pélican");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés. Pour chaque réussite de DE, vous volez 2 arcanes au joueur ciblé.");

			$( ".nomCombo" ).append("Cigogne");
			$( ".effetCombo" ).append("Le joueur adverse ne peut utiliser les effets de ses lieux pour ce tour.");
		};

		//CELLULE VEGETALE					
		if(sortA == "Cellule vegetale" && sortB == "Dispersion" || sortA =="Dispersion" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Pollen");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés. Vous pouvez lancer un autre combo avec Cellule végétale");
			
			$( ".nomCombo" ).append("Mousse");
			$( ".effetCombo" ).append("Le joueurs adverse défausse le lieu présent dans la région ciblée.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Eau" || sortA =="Eau" && sortB == "Cellule vegetale" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Mangrove");
			$( ".effetCombo" ).append("Pour chaque sort Eau en jeu, ajoutez 2DR à votre pool de dés.");
			
			$( ".nomCombo" ).append("Barrière de corail");
			$( ".effetCombo" ).append("Ajoutez 8D pour chaque autre combo cellule animale + Eau.");

			$( ".nomCombo" ).append("Algue");
			$( ".effetCombo" ).append("Ajoutez 4 états Inciblable parmi les tourelles des régions nord.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Message électrique");
			$( ".effetCombo" ).append("Si la région dans laquelle se trouve   Cellule végétale est ciblée, appliqué un effet  de Cellule végétale + Protection.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Epee" || sortA =="Epee" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Huàying");
			$( ".effetCombo" ).append("Vous pouvez copier et appliquer les effets d'un autre combo biomage.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Feu" || sortA =="Feu" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Charbon");
			$( ".effetCombo" ).append("Ajoutez 4D a chaque autre combo Feu que vous activez ce tour-ci.");
			
			$( ".nomCombo" ).append("Chêne liège");
			$( ".effetCombo" ).append("Supprimez 4DFeu de la pool adverse.");

			$( ".nomCombo" ).append("Lys de feu");
			$( ".effetCombo" ).append("Gagnez 2 PP par état Incendie sur votre plateau.");
		};
		/*
		if(sortA == "Cellule vegetale" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule vegetale" && sortB == "Glace" || sortA =="Glace" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Pin ponderosa");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés. Si un autre combo glace a été lancé, ajoutez 8DM à la place.");
			
			$( ".nomCombo" ).append("Silène acaule");
			$( ".effetCombo" ).append("Votre effectif ne peut pas être déplacé par des DAir.");

			$( ".nomCombo" ).append("Pin rigide");
			$( ".effetCombo" ).append("Ajoutez 3DRe à votre pool de dés. Pour chaque tourelle ciblée, enlevez un état Putréfaction.");		
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Cellule animale");
			$( ".effetCombo" ).append("Le sort Cellule végétale devient Cellule animale jusqu'à la fin du tour.");
	
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Photosynthèse");
			$( ".effetCombo" ).append("Supprimez des états Maladie dans une région");		
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Moniliose");
			$( ".effetCombo" ).append("Le joueurs adverse subit 2 états Putréfaction."); 
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Metal" || sortA =="Metal" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Arabidopsis halleri");
			$( ".effetCombo" ).append("Vous choisissez entre ne subir aucun dégât d'un combo métal ou supprimer un sort métal sur un plateau adverse.");			
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Mort" || sortA =="Mort" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Belladone");
			$( ".effetCombo" ).append("Ajoutez 6DM à votre pool de dés.");
			
			$( ".nomCombo" ).append("Oenanthe safranée");
			$( ".effetCombo" ).append("Ajoutez 10DM à votre pool de dés. Pour chaque effectif morts, l'adversaire gagne 1PP.");

			$( ".nomCombo" ).append("Ciguë");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés. Si l'effectif adverse s'est déplacé ce tour-ci, ajoutez 10DM à la place.");
		};
		/*
		if(sortA == "Cellule vegetale" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Chauve-souris");
			$( ".effetCombo" ).append("Pour chaque sort ombre présent sur tous les plateaux, ajoutez 2 états Inciblables sur votre plateau.");
			
			$( ".nomCombo" ).append("Poisson lanterne");
			$( ".effetCombo" ).append("Si vous avez le sort Lumière sur votre plateau ajoutez 8DM à votre pool de dés, sinon ajoutez 5DM à la place.");

			$( ".nomCombo" ).append("Poisson abyssal");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés. Si vous avez 3 réussites parmi vos DE, les écoles adjacentes au joueur ciblé sont elles aussi touchées et subissent un état Entrave que les joueurs placent où ils veulent.");
		};
		*/
		if(sortA == "Cellule vegetale" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Lichen");
			$( ".effetCombo" ).append("4DEau ou retirer jeton Maladie ou Orientation???");

			$( ".nomCombo" ).append("Fougère");
			$( ".effetCombo" ).append("Si vous ne possédez qu'un sort Cellule végétale sur votre plateau, vous pouvez en prendre un depuis la pile « Sort ».");

			$( ".nomCombo" ).append("Campanula muralis");
			$( ".effetCombo" ).append("Vous gagnez 3 points de Prestige.");			
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Protection" || sortA =="Protection" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Éthylène");
			$( ".effetCombo" ).append("Si un combo avec cellule végétale a été lancé alors ajoutez 8DB à votre pool de dés.");
			
			$( ".nomCombo" ).append("Tanin");
			$( ".effetCombo" ).append("Le/les joueur(s)qui vous a/ont attaqué pendant cette phase d'assaut subissent 3DM.");

			$( ".nomCombo" ).append("Épine");
			$( ".effetCombo" ).append("Pour chaque réussite de la pool adverse, ajoutez un Dd à votre pool.");
		};
		/*
		if(sortA == "Cellule vegetale" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Mouche");
			$( ".effetCombo" ).append("Pour chaque état Putréfaction présent sur votre plateau, ajoutez 2 états Inciblables sur votre plateau.");
			
			$( ".nomCombo" ).append("Asticot");
			$( ".effetCombo" ).append("Pour chaque état Putréfaction présent sur votre plateau, vous pouvez ajouter un PdD à la tourelle pour supprimez l'état.");

			$( ".nomCombo" ).append("Cloporte");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie. Vous pouvez cibler toutes les régions adverses touchées par Putréfaction.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule vegetale" && sortB == "Sang" || sortA =="Sang" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Sarracenia leucophylla");
			$( ".effetCombo" ).append("Ajoutez 3DM à votre pool de dés. Volez 6 arcanes au joueur que vous attaquez.");
			
			$( ".nomCombo" ).append("Rafflesia arnoldii");
			$( ".effetCombo" ).append("Ajoutez 8DE à votre pool de dés.");

			$( ".nomCombo" ).append("Plante carnivore");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés. Si vous avez perdu des effectifs durant ce tour, ajoutez 8Dd à la place.");
		};
		/*
		if(sortA == "Cellule vegetale" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Paresseux");
			$( ".effetCombo" ).append("Ajoutez 7DEau à votre pool de dés.");
			
			$( ".nomCombo" ).append("Ambroisie");
			$( ".effetCombo" ).append("Supprimez 3 états Maladie de votre plateau.");

			$( ".nomCombo" ).append("Lapin");
			$( ".effetCombo" ).append("Vos effectif ne peuvent mourir de combo cellule végétale.");
		};
		*/
		if(sortA == "Cellule vegetale" && sortB == "Terre" || sortA =="Terre" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Bulbe");
			$( ".effetCombo" ).append("Si vous avez le sort glace sur votre plateau, gagnez 12 arcanes. Sinon...");
			
			$( ".nomCombo" ).append("Rhizome");
			$( ".effetCombo" ).append("Si vous avez un sort Cellule végétale sur votre plateau, vous pouvez aller chercher un sort Cellule végétale dans la pile sort.");
		};
		
		if(sortA == "Cellule vegetale" && sortB == "Vent" || sortA =="Vent" && sortB == "Cellule vegetale"){
			$( ".nomCombo" ).append("Tillandsia");
			$( ".effetCombo" ).append("Vous gagnez 10 arcanes pour chaque sort Vent sur tous les plateaux.");
			
			$( ".nomCombo" ).append("Pissenlit");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés. Vous pouvez déplacer le sort cellule végétale de votre plateau.");
		};

		//DISPERSION				
		if(sortA == "Dispersion" && sortB == "Eau" || sortA =="Eau" && sortB == "Dispersion" || sortA == "Eau" && sortB == "Eau"){
			$( ".nomCombo" ).append("Bulle");
			$( ".effetCombo" ).append("Choisissez un élève, celui-ci est mis hors du plateau lors de la phase d'assaut. Replacez-le n'importe où sur votre plateau à la fin de l'assaut.");
		
		};
		
		if(sortA == "Dispersion" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Arc électrique");
			$( ".effetCombo" ).append("qui subit un état Entrave, une tourelle située dans une autre région subit aussi un état Entrave.");
		};
		
		if(sortA == "Dispersion" && sortB == "Epee" || sortA =="Epee" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Caladbolg");
			$( ".effetCombo" ).append("Si vous activez Caladbolg vous ne pouvez faire aucun autre combo. Ajoutez 15Dd à votre pool de dés.");
		};
		
		if(sortA == "Dispersion" && sortB == "Feu" || sortA =="Feu" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Étincelles");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés");
		};
		
		if(sortA == "Dispersion" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Profusion");
			$( ".effetCombo" ).append("Tous les sorts activés ce tour-ci coûtent 3 d'arcanes de moins pour tous les joueurs. Le coût d’Arcane ne peut pas être inférieur à 1.");
		};
		
		if(sortA == "Dispersion" && sortB == "Glace" || sortA =="Glace" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Cristaux");
			$( ".effetCombo" ).append("Vous gagnez 3 points de Prestige.");
		};
		
		if(sortA == "Dispersion" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Concentration");
			$( ".effetCombo" ).append("Empêche un joueur adversaire de déplacer ses élèves à la phase 7-Déplacement des effectifs.");
	
		};
		
		if(sortA == "Dispersion" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Arc-en-ciel");
			$( ".effetCombo" ).append("Vous gagnez 8 point de Prestige jusqu'à la fin du tour. Si vous avez activé le combo Pluie (p.21), vous gagnez 7 points de Prestige de plus.");		
		};
		
		if(sortA == "Dispersion" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Virus");
			$( ".effetCombo" ).append("Vous pouvez choisir un autre combo Maladie et en appliquer les effet"); 
		};
		
		if(sortA == "Dispersion" && sortB == "Metal" || sortA =="Metal" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Copeaux");
			$( ".effetCombo" ).append("Ajoutez 8Dd à votre pool de dés.");			
		};
		
		if(sortA == "Dispersion" && sortB == "Mort" || sortA =="Mort" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Écartèlement");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés. Pour chaque effectif mort ce tour-ci, la tourelle sur laquelle il était est entravée.");
		};
		
		if(sortA == "Dispersion" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Pénombre");
			$( ".effetCombo" ).append("Si le joueur adverse a activé un sort ou un combo Lumière, divisez les D de ce sort ou combo par deux.");
		};
		
		if(sortA == "Dispersion" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Gravas");
			$( ".effetCombo" ).append("Ajoutez 5Dd à votre pool de dés.");
		};
		
		if(sortA == "Dispersion" && sortB == "Protection" || sortA =="Protection" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Polyvalence");
			$( ".effetCombo" ).append("Retirez un dé de chaque type de la pool adverse.");
		};
		
		if(sortA == "Dispersion" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Lucilia sericata");
			$( ".effetCombo" ).append("Ajoutez un nombre de DE égal au nombre de morts du joueur adverse durant l'assaut à votre pool de dés.");
		};
		
		if(sortA == "Dispersion" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Diffraction");
			$( ".effetCombo" ).append("Vous ne pouvez cibler qu'une région maximum. Une fois la pool faite et les dégâts comptabilisés. Relancez la pool en divisant le nombre de dés de chaque type par 2 (arrondi à l'inférieur ; min. 1). Lors de ce deuxième lancé, les régions ciblées sont celles qui sont adjacentes à celle du premier lancé.");
		};
		
		if(sortA == "Dispersion" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Palagénésie");
			$( ".effetCombo" ).append("Ajoutez 1DRe à votre pool de dés. Si vous obtenez une réussite parmi vos DRe, vous pouvez récupérer 1 élève de chaque discipline depuis vote cimetière et/ou le cimetière commun.");
		};
		
		if(sortA == "Dispersion" && sortB == "Sang" || sortA =="Sang" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Pluie de sang");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés.");
		};
		
		if(sortA == "Dispersion" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Gae bolga");
			$( ".effetCombo" ).append("Ajoutez 5DM à votre pool de dés. Les effectifs morts via les réussites de Gae bolga sont retirés du jeu et ne pourront pas être ressuscités.");
		};
		
		if(sortA == "Dispersion" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Dissémination");
			$( ".effetCombo" ).append("Le joueur peut choisir une tourelle et répartir l'effectif de cette tourelle où il veut sur son plateau.");
		};
		
		if(sortA == "Dispersion" && sortB == "Terre" || sortA =="Terre" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Sable");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés.");
		};
		
		if(sortA == "Dispersion" && sortB == "Vent" || sortA =="Vent" && sortB == "Dispersion"){
			$( ".nomCombo" ).append("Courant");
			$( ".effetCombo" ).append("Le joueur adverse doit déplacer un de ses sorts sur une case adjacente libre.");
		};

		//EAU			
		if(sortA == "Eau" && sortB == "Electricite" || sortA =="Electricite" && sortB == "Eau"){
			$( ".nomCombo" ).append("Électrocution");
			$( ".effetCombo" ).append("Ajoutez 1DM à votre pool de dés + 1Dd sur l'une des tourelles connectées à l'eau.");
		};
		
		if(sortA == "Eau" && sortB == "Epee" || sortA =="Epee" && sortB == "Eau"){
			$( ".nomCombo" ).append("Excalibur");
			$( ".effetCombo" ).append("Ajoutez 6Dd à votre pool de dés. Votre sort Épée ne peut être supprimé par un joueur adverse jusqu'à la fin du tour");
		};
		
		if(sortA == "Eau" && sortB == "Feu" || sortA =="Feu" && sortB == "Eau"){
			$( ".nomCombo" ).append("Extincteur");
			$( ".effetCombo" ).append("Supprimez un état Incendie de votre plateau.");
		};
		
		if(sortA == "Eau" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Eau"){
			$( ".nomCombo" ).append("Source d'arcane");
			$( ".effetCombo" ).append("Vous gagnez 6 arcanes.");
		};
		
		if(sortA == "Eau" && sortB == "Glace" || sortA =="Glace" && sortB == "Eau"){
			$( ".nomCombo" ).append("Glaçons");
			$( ".effetCombo" ).append("Ajoutez 4Dd à votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Eau"){
			$( ".nomCombo" ).append("Feu");
			$( ".effetCombo" ).append("Ajoutez 1DFeu à votre pool de dés.");
	
		};
		
		if(sortA == "Eau" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Eau"){
			$( ".nomCombo" ).append("Lune");
			$( ".effetCombo" ).append("Décalez un sort Eau adverse d'une case adjacente disponible.");		
		};
		
		if(sortA == "Eau" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Eau"){
			$( ".nomCombo" ).append("Antidote");
			$( ".effetCombo" ).append("Ajoutez 5DEau à votre pool de dés."); 
		};
		
		if(sortA == "Eau" && sortB == "Metal" || sortA =="Metal" && sortB == "Eau"){
			$( ".nomCombo" ).append("Rouille");
			$( ".effetCombo" ).append("Supprimez 2D de la pool de dés adverse pour chaque combo archéomage ennemi utilisé.");			
		};
		
		if(sortA == "Eau" && sortB == "Mort" || sortA =="Mort" && sortB == "Eau"){
			$( ".nomCombo" ).append("Poison");
			$( ".effetCombo" ).append("Lors de la prochaine phase 1- Extraction d'arcanes, le joueur ciblé subit 2 états Maladie qu'il répartit comme il le souhaite sur son plateau");
		};
		
		if(sortA == "Eau" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Eau"){
			$( ".nomCombo" ).append("Profondeur");
			$( ".effetCombo" ).append("Divisez par 2 tous les dés des combos Lumière de la pool adverse.");
		};
		
		if(sortA == "Eau" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Eau"){
			$( ".nomCombo" ).append("Ricochet");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés. Pour 2Dd, vous pouvez les relancer autant de fois qu'il y a de réussite, les dégâts s'additionnent.");
		};
		
		if(sortA == "Eau" && sortB == "Protection" || sortA =="Protection" && sortB == "Eau"){
			$( ".nomCombo" ).append("Mur d'eau");
			$( ".effetCombo" ).append("Ciblez 2 régions de votre plateau, elles ne peuvent subir de dégâts des DFeu.");
		};
		
		if(sortA == "Eau" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Eau"){
			$( ".nomCombo" ).append("Moisissure");
			$( ".effetCombo" ).append("La région ciblée subit 1 état Putréfaction et 1 état Maladie.");
		};
		
		if(sortA == "Eau" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Eau"){
			$( ".nomCombo" ).append("Reflet");
			$( ".effetCombo" ).append("Sélectionnez 2D de la pool adverse et mettez les dans votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Eau"){
			$( ".nomCombo" ).append("Fontaine de jouvence");
			$( ".effetCombo" ).append("Ajoutez 2DRe à votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Sang" || sortA =="Sang" && sortB == "Eau"){
			$( ".nomCombo" ).append("Perfusion");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie présents sur votre plateau.");
		};
		
		if(sortA == "Eau" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Eau"){
			$( ".nomCombo" ).append("Trident de Poséidon");
			$( ".effetCombo" ).append("Vous pouvez cibler jusqu'à 4 régions. Ajoutez 6DEau et 2DD à votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Eau"){
			$( ".nomCombo" ).append("Nuage");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Terre" || sortA =="Terre" && sortB == "Eau"){
			$( ".nomCombo" ).append("Marécage");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés.");
		};
		
		if(sortA == "Eau" && sortB == "Vent" || sortA =="Vent" && sortB == "Eau"){
			$( ".nomCombo" ).append("Pluie");
			$( ".effetCombo" ).append("Supprimez 1 état Incendie présent sur votre plateau.");
		};

		//ELECTRICITE				
		if(sortA == "Electricite" && sortB == "Epee" || sortA =="Epee" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Futsunomitama");
			$( ".effetCombo" ).append("Les quatre sorts placés au centre de votre plateau ne peuvent être ciblés. Ajoutez 7Dd à votre pool de dés.");
		};
		
		if(sortA == "Electricite" && sortB == "Feu" || sortA =="Feu" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Foudre");
			$( ".effetCombo" ).append("Ajoutez 4Dd et 1DFeu à votre pool de dés.");
		};
		
		if(sortA == "Electricite" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Pile arcanique");
			$( ".effetCombo" ).append("??? Vous gagnez 5 arcanes au début de chaque phase jusqu'au prochain assaut.");
		};
		
		if(sortA == "Electricite" && sortB == "Glace" || sortA =="Glace" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Défaillance");
			$( ".effetCombo" ).append("Le joueur adverse subit un état Incendie.");
		};
		
		if(sortA == "Electricite" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Neutre");
			$( ".effetCombo" ).append("Supprimez 2D de votre pool de dés. Vous pouvez activer le sort Électricité autant de fois que vous le souhaitez à ce tour");
		};
		
		if(sortA == "Electricite" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Aveuglement");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");		
		};
		
		if(sortA == "Electricite" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Névralgie du trijumeau ");
			$( ".effetCombo" ).append("Ajoutez 2DM et 1DE à votre pool de dés."); 
		};
		
		if(sortA == "Electricite" && sortB == "Metal" || sortA =="Metal" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Conduction");
			$( ".effetCombo" ).append("Ajoutez 6Dd à votre pool de dés. Une tourelle du combo subit 1 point de dégât.");			
		};
		
		if(sortA == "Electricite" && sortB == "Mort" || sortA =="Mort" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Chaise électrique");
			$( ".effetCombo" ).append("Ajoutez 7DM à votre pool de dés.");
		};
		/*
		if(sortA == "Electricite" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Profondeur");
			$( ".effetCombo" ).append("Divisez par 2 tous les dés des combos Lumière de la pool adverse.");
		};
		*/
		if(sortA == "Electricite" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Piézoélectricité (sonar)");
			$( ".effetCombo" ).append("Le joueur adverse doit désigner une région dans laquelle il y a un professeur.");
		};
		
		if(sortA == "Electricite" && sortB == "Protection" || sortA =="Protection" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Paratonerre");
			$( ".effetCombo" ).append("Ciblez 1 région de votre plateau, celle-ci est protégée des DE.");
		};
		/*
		if(sortA == "Electricite" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Moisissure");
			$( ".effetCombo" ).append("La région ciblée subit 1 état Putréfaction et 1 état Maladie.");
		};
		*/
		if(sortA == "Electricite" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Décharge");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés.");
		};
		
		if(sortA == "Electricite" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Défibrilateur");
			$( ".effetCombo" ).append("Ajoutez 3DRe à votre pool de dés.");
		};
		
		if(sortA == "Electricite" && sortB == "Sang" || sortA =="Sang" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Cautérisation électrique");
			$( ".effetCombo" ).append("Enlève 1DM de la pool de dés adverse.");
		};
		
		if(sortA == "Electricite" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Sceptre Shango ");
			$( ".effetCombo" ).append("L'adversaire subit un état Incendie dans la région ciblée. Vous gagnez 3 points de Prestige et 15 arcanes.");
		};
		
		if(sortA == "Electricite" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Polarisation");
			$( ".effetCombo" ).append("Permet de replacer 3 élèves sur une tourelle où un sort de leur discipline se trouve.");
		};
		
		if(sortA == "Electricite" && sortB == "Terre" || sortA =="Terre" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Isolation");
			$( ".effetCombo" ).append("??? Supprimez un sort Électricité de votre plateau.");
		};
		
		if(sortA == "Electricite" && sortB == "Vent" || sortA =="Vent" && sortB == "Electricite"){
			$( ".nomCombo" ).append("Tempête");
			$( ".effetCombo" ).append("Ajoutez 2Dd et 2DAir à votre pool de dés.");
		};

		//EPEE
		if(sortA == "Epee" && sortB == "Feu" || sortA =="Feu" && sortB == "Epee"){
			$( ".nomCombo" ).append("Dyrnwyn");
			$( ".effetCombo" ).append("Ajoutez 10DD à votre pool de dés si vous possédez 75 points de Prestige ou plus. Sinon ajoutez 5Dd à la place.");
		};
		
		if(sortA == "Epee" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Epee"){
			$( ".nomCombo" ).append("Épée de Yarilo");
			$( ".effetCombo" ).append("Ajoutez 8DM à votre pool de dés. Pour chaque réussite de vos DM, le joueur actif peut décider de gagner 3 arcanes ou d'appliquer l'effet du dé mort.");
		};
		/*
		if(sortA == "Epee" && sortB == "Glace" || sortA =="Glace" && sortB == "Epee"){
			$( ".nomCombo" ).append("Défaillance");
			$( ".effetCombo" ).append("Le joueur adverse subit un état Incendie.");
		};
		*/
		if(sortA == "Epee" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Epee"){
			$( ".nomCombo" ).append("Totsuka-no-tsurugi ");
			$( ".effetCombo" ).append("Ajoutez 7Dd à votre pool de dés. Le joueur ciblé perd 3 points de Prestige");
		};
		
		if(sortA == "Epee" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Epee"){
			$( ".nomCombo" ).append("Curtana");
			$( ".effetCombo" ).append("Retirez 5DM de la pool de dés adverse.");		
		};
		
		if(sortA == "Epee" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Epee"){
			$( ".nomCombo" ).append(" Tyrfing ");
			$( ".effetCombo" ).append("Ajoutez 11Dd à votre pool de dés."); 
		};
		
		if(sortA == "Epee" && sortB == "Metal" || sortA =="Metal" && sortB == "Epee"){
			$( ".nomCombo" ).append("Courtoise");
			$( ".effetCombo" ).append("Ajoutez 10Dd à votre pool de dés. Supprimez 4DB de la pool adverse.");			
		};
		
		if(sortA == "Epee" && sortB == "Mort" || sortA =="Mort" && sortB == "Epee"){
			$( ".nomCombo" ).append("Dàinsleff");
			$( ".effetCombo" ).append("Ajoutez 8DM à votre pool de dés. Si vous n'avez aucune réussite parmi vos DM, tuez un des deux élève ayant activé Dàinsleff.");
		};
		
		if(sortA == "Epee" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Epee"){
			$( ".nomCombo" ).append("Carnwennan ");
			$( ".effetCombo" ).append("Ajoutez 8Dd à votre pool de dés. La région comportant l'élève archéomage ne peut être ciblée.");
		};
		
		if(sortA == "Epee" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Epee"){
			$( ".nomCombo" ).append("Épée dans le rocher");
			$( ".effetCombo" ).append("Si vous activez ce combo, les autres joueurs peuvent participer en payant 10 arcanes chacun. Si l'un des joueurs réussit l'épreuve, il gagne la partie. Les joueurs qui ne réussissent pas perdent 50 Points de Prestige.");
		};
		
		if(sortA == "Epee" && sortB == "Protection" || sortA =="Protection" && sortB == "Epee"){
			$( ".nomCombo" ).append("Fourreau d'Excalibur");
			$( ".effetCombo" ).append("Ajoutez 7DB à votre pool de dés.");
		};
		
		if(sortA == "Epee" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Epee"){
			$( ".nomCombo" ).append("Mistiltein");
			$( ".effetCombo" ).append("Ajoutez 12Dd à votre pool de dés.");
		};
		
		if(sortA == "Epee" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Epee"){
			$( ".nomCombo" ).append("Épée de Nuada");
			$( ".effetCombo" ).append("Ajoutez 12Dd à votre pool de dés.");
		};
		
		if(sortA == "Epee" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Epee"){
			$( ".nomCombo" ).append("Skofnung");
			$( ".effetCombo" ).append("Ajoutez 3Dd à votre pool de dés. Si vous avez 12 cases libres dans la cour de l'école, ajoutez 12Dd et 6DD à votre pool de dés à la place.");
		};
		
		if(sortA == "Epee" && sortB == "Sang" || sortA =="Sang" && sortB == "Epee"){
			$( ".nomCombo" ).append("Cura Si Manjakini ");
			$( ".effetCombo" ).append("Si vous n'êtes pas le joueur avec le plus de point de Prestige alors gagnez un nombre de point de Prestige supérieur de 1 à ceux du joueur qui en a le plus.");
		};
		
		if(sortA == "Epee" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Epee"){
			$( ".nomCombo" ).append("Lance et épée de Saint Georges");
			$( ".effetCombo" ).append("Ajoutez 8Dd à votre pool de dés.");
		};
		
		if(sortA == "Epee" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Epee"){
			$( ".nomCombo" ).append("Épée de Damoclès");
			$( ".effetCombo" ).append("Ciblez une école adverse. Si celle-ci utilise 20 arcanes ou plus lors de votre assaut, ajoutez 6DD et 10Dd à votre pool de dés.");
		};
		
		if(sortA == "Epee" && sortB == "Terre" || sortA =="Terre" && sortB == "Epee"){
			$( ".nomCombo" ).append("Durandall");
			$( ".effetCombo" ).append("Les joueurs adverse ne peuvent copier les sorts présents sur votre tableau jusqu'à la fin du tour.");
		};
		
		if(sortA == "Epee" && sortB == "Vent" || sortA =="Vent" && sortB == "Epee"){
			$( ".nomCombo" ).append("Fragaragh");
			$( ".effetCombo" ).append("Ajoutez 12Dd à votre pool de dés. Si vous avez 6 réussites ou plus avec vos Dd, alors le joueur adverse doit désigner 3 régions parmi lesquelles il y a le directeur.");
		};

		//Feu
		if(sortA == "Feu" && sortB == "Gemme d'arcane" || sortA =="Gemme d'arcane" && sortB == "Feu"){
			$( ".nomCombo" ).append("Explosion arcanique");
			$( ".effetCombo" ).append("Ajoutez un nombre de Dd égal à un cinquième de votre stock d’arcane à votre pool de dés.");
		};
		
		if(sortA == "Feu" && sortB == "Glace" || sortA =="Glace" && sortB == "Feu"){
			$( ".nomCombo" ).append("Fonte");
			$( ".effetCombo" ).append("Ajoutez 1DEau à votre pool de dés.");
		};
		
		if(sortA == "Feu" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Feu"){
			$( ".nomCombo" ).append("Eau");
			$( ".effetCombo" ).append("Ajoutez 1DEau à votre pool de dés.");
		};
		
		if(sortA == "Feu" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Feu"){
			$( ".nomCombo" ).append("Soleil");
			$( ".effetCombo" ).append("Supprimez le sort Ombre dans la région ciblée.");		
		};
		
		if(sortA == "Feu" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Feu"){
			$( ".nomCombo" ).append("Stérilisation");
			$( ".effetCombo" ).append("Ciblez 2 régions, elles ne peuvent subir d'états Maladie."); 
		};
		
		if(sortA == "Feu" && sortB == "Metal" || sortA =="Metal" && sortB == "Feu"){
			$( ".nomCombo" ).append("Enclume");
			$( ".effetCombo" ).append("Ajoutez 3Dd à votre pool de dés si un sort ou un combo archéomage est activé lors de cette attaque.");			
		};
		
		if(sortA == "Feu" && sortB == "Mort" || sortA =="Mort" && sortB == "Feu"){
			$( ".nomCombo" ).append("Combustion spontanée");
			$( ".effetCombo" ).append("Durant 2 tours, lors de la phase 1- Extraction d'Arcane tous les joueurs effectuent un lancer de dé, y compris vous-même. Le joueur qui aura le dé à la valeur la plus faible devra placer un état Incendie sur un lieu de son choix.");
		};
		
		if(sortA == "Feu" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Feu"){
			$( ".nomCombo" ).append("Colonnes de fumée");
			$( ".effetCombo" ).append("Ajoutez 2DFeu et 1DE à votre pool de dés.");
		};
		
		if(sortA == "Feu" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Feu"){
			$( ".nomCombo" ).append("Lave");
			$( ".effetCombo" ).append("Ajoutez 1DFeu à votre pool de dés. S'il y a réussite parmi vos DFeu alors le joueur adverse subit 1 état Incendie supplémentaire.");
		};
		
		if(sortA == "Feu" && sortB == "Protection" || sortA =="Protection" && sortB == "Feu"){
			$( ".nomCombo" ).append("Mur de feu");
			$( ".effetCombo" ).append("Ciblez 2 régions de votre plateau, elles ne peuvent subir de dégâts des sorts et combos Cellule végétale.");
		};
		
		if(sortA == "Feu" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Feu"){
			$( ".nomCombo" ).append("Désinfection");
			$( ".effetCombo" ).append("Ajoutez 2DEau à votre pool de dés ou enlevez un état Putréfaction");
		};
		
		if(sortA == "Feu" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Feu"){
			$( ".nomCombo" ).append("Illusion");
			$( ".effetCombo" ).append("Déplacez un état Incendie présent sur votre plateau sur le plateau d’un joueur adverse un autre joueur. Ou lieu inutilisable ???");
		};
		/*
		if(sortA == "Feu" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Feu"){
			$( ".nomCombo" ).append("Cautérisation");
			$( ".effetCombo" ).append("Ajoutez 3Dd à votre pool de dés. Si vous avez 12 cases libres dans la cour de l'école, ajoutez 12Dd et 6DD à votre pool de dés à la place.");
		};
		*/
		if(sortA == "Feu" && sortB == "Sang" || sortA =="Sang" && sortB == "Feu"){
			$( ".nomCombo" ).append("Cautérisation");
			$( ".effetCombo" ).append("Enlevez 1DM de la pool adverse.");
		};
		
		if(sortA == "Feu" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Feu"){
			$( ".nomCombo" ).append("Marteau d'Héphaistos");
			$( ".effetCombo" ).append("Choisissez un sort archéomage autre que le sceptre. Vous pouvez activer un combo avec ce sort et n'importe quel sort présent sur votre plateau.");
		};
		
		if(sortA == "Feu" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Feu"){
			$( ".nomCombo" ).append("Plasma");
			$( ".effetCombo" ).append("Ajoutez 2DFeu dans la pool de dés. Vous pouvez relancer 2DFeu.");
		};
		
		if(sortA == "Feu" && sortB == "Terre" || sortA =="Terre" && sortB == "Feu"){
			$( ".nomCombo" ).append("Armure de terre");
			$( ".effetCombo" ).append("Ajoutez 2DB à votre pool de dés.");
		};
		
		if(sortA == "Feu" && sortB == "Vent" || sortA =="Vent" && sortB == "Feu"){
			$( ".nomCombo" ).append("Ravivement/Extinction");
			$( ".effetCombo" ).append("Si vous possédez un nombre égal ou supérieur de sort Feu que de sort Vent sur votre plateau alors 4DFeu. Sinon, supprimez un état Incendie");
		};

		//Gemme d'arcane
		if(sortA == "Gemme d'arcane" && sortB == "Glace" || sortA =="Glace" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Congélation");
			$( ".effetCombo" ).append("Vous ne pouvez plus utiliser la Gemme d’arcane pour d'autres combos ce tour-ci. Vous gagnez 15 arcanes à la prochaine phase d'extraction.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Gemme impure");
			$( ".effetCombo" ).append("Lors du prochain assaut de votre adversaire, un combo activé de son choix ne prendra pas effet.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Explosion rayonnante");
			$( ".effetCombo" ).append("Ajoutez un nombre de DE égal à un cinquième de votre stock d’arcane à votre pool de dés.");		
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Siliciose");
			$( ".effetCombo" ).append("Le joueur adverse subit 3 états Maladie lors de la phase 1-Extraction d'arcanes, s’il n’extrait pas d’arcane, il ne subit pas d’état Maladie."); 
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Metal" || sortA =="Metal" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Stockage");
			$( ".effetCombo" ).append("???");			
		};
		/*
		if(sortA == "Gemme d'arcane" && sortB == "Mort" || sortA =="Mort" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Combustion spontanée");
			$( ".effetCombo" ).append("Durant 2 tours, lors de la phase 1- Extraction d'Arcane tous les joueurs effectuent un lancer de dé, y compris vous-même. Le joueur qui aura le dé à la valeur la plus faible devra placer un état Incendie sur un lieu de son choix.");
		};
		*/
		if(sortA == "Gemme d'arcane" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Explosion sombre");
			$( ".effetCombo" ).append("Ajoutez un nombre de DE égal au cinquième de votre stock d'arcanes (arrondi à l'inférieur) à votre pool de dés");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Lapidification");
			$( ".effetCombo" ).append("Lors de la prochaine phase 1- Extraction d'arcanes, un adversaire ciblé ne gagne que la moitié (arrondi à l'entier supérieur) de ce qu'il devrait.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Protection" || sortA =="Protection" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Coffre-fort");
			$( ".effetCombo" ).append("Vos arcanes ne peuvent être volées ce tour-ci.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Sabotage");
			$( ".effetCombo" ).append("Lors de la prochaine phase 1-Extraction d'arcanes, le joueur adverse ne gagne que la moitié du montant indiqué.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Rebond");
			$( ".effetCombo" ).append("Ajoutez 8Dd à votre pool de dés. Parmi les réussites, 2 ciblent les tourelles qui ont activé le combo.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Essence vitale");
			$( ".effetCombo" ).append("Vous gagnez 2 arcanes par effectif ressuscité lors de cet assaut.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Sang" || sortA =="Sang" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Nutriment");
			$( ".effetCombo" ).append("Vous pouvez ajouter 2D de trois types de dés déjà présents votre pool.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Corne d'abondance");
			$( ".effetCombo" ).append("Vous gagnez 20 arcanes et chaque adversaire en gagne 5.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Lien arcanique");
			$( ".effetCombo" ).append("Vous pouvez activer des combos sans que les cartes soient sur la même ligne.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Terre" || sortA =="Terre" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Forage");
			$( ".effetCombo" ).append("Vous gagnez 6 arcanes.");
		};
		
		if(sortA == "Gemme d'arcane" && sortB == "Vent" || sortA =="Vent" && sortB == "Gemme d'arcane"){
			$( ".nomCombo" ).append("Dissémination");
			$( ".effetCombo" ).append("Ciblez un joueur, celui-ci perd 5 arcanes. Les joueurs adjacents au joueur ciblé reçoivent chacun 2 arcanes.");
		};

		//GLACE
		if(sortA == "Glace" && sortB == "Inversion" || sortA =="Inversion" && sortB == "Glace"){
			$( ".nomCombo" ).append("Iceberg");
			$( ".effetCombo" ).append("Ajoutez un nombre de DE égal au double du nombre de sort Glace que vous possédez à votre pool de dés.");
		};
		
		if(sortA == "Glace" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Glace"){
			$( ".nomCombo" ).append("Aurore boréale");
			$( ".effetCombo" ).append("Vous gagnez 8 points de Prestige jusqu'à la fin du tour. = OU = Vous gagnez 2 points de Prestige.");		
		};
		
		if(sortA == "Glace" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Glace"){
			$( ".nomCombo" ).append("Engelure");
			$( ".effetCombo" ).append("Ajoutez 1DM et 6DE à votre pool de dés."); 
		};
		
		if(sortA == "Glace" && sortB == "Metal" || sortA =="Metal" && sortB == "Glace"){
			$( ".nomCombo" ).append("Gêle");
			$( ".effetCombo" ).append("Supprimez 1Dd de la pool adverse par combo archéomage et métal ennemis activés.");			
		};
		
		if(sortA == "Glace" && sortB == "Mort" || sortA =="Mort" && sortB == "Glace"){
			$( ".nomCombo" ).append("Hypothermie");
			$( ".effetCombo" ).append("Ajoutez un nombre de DM égal au triple de sort glace que vous possédez à votre pool de dés.");
		};
		/*
		if(sortA == "Glace" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Glace"){
			$( ".nomCombo" ).append("Explosion sombre");
			$( ".effetCombo" ).append("Ajoutez un nombre de DE égal au cinquième de votre stock d'arcanes (arrondi à l'inférieur) à votre pool de dés");
		};
		*/
		if(sortA == "Glace" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Glace"){
			$( ".nomCombo" ).append("Soutien temporaire");
			$( ".effetCombo" ).append("Ajoutez 3DR à votre pool de dés. Supprime un état Incendie par réussite de DR.");
		};
		
		if(sortA == "Glace" && sortB == "Protection" || sortA =="Protection" && sortB == "Glace"){
			$( ".nomCombo" ).append("Mur de glace");
			$( ".effetCombo" ).append("Ciblez deux régions, elles sont protégées de 4 points de dégâts.");
		};
		
		if(sortA == "Glace" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Glace"){
			$( ".nomCombo" ).append("Emprisonnement");
			$( ".effetCombo" ).append("Vous ne subissez pas l'effet de Putréfaction ce tour-ci.");
		};
		
		if(sortA == "Glace" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Glace"){
			$( ".nomCombo" ).append("Verglas");
			$( ".effetCombo" ).append("Lors de la prochaine phase de 6- Déplacement, les déplacements ne sont plus de 1 tourelles mais de 2.");
		};
		
		if(sortA == "Glace" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Glace"){
			$( ".nomCombo" ).append("Cryogénisation");
			$( ".effetCombo" ).append("Ajoutez 7DRe à votre pool de dés. Les élèves reviennent lors de la prochaine phase de Recrutement.");
		};
		
		if(sortA == "Glace" && sortB == "Sang" || sortA =="Sang" && sortB == "Glace"){
			$( ".nomCombo" ).append("Stock de sang");
			$( ".effetCombo" ).append("Permet d'avoir 5DRe en stock et de les utiliser à tout moment.");
		};
		
		if(sortA == "Glace" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Glace"){
			$( ".nomCombo" ).append("Corne de Skrýmir");
			$( ".effetCombo" ).append("Ajoutez 10DEau à votre pool de dés.");
		};
		
		if(sortA == "Glace" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Glace"){
			$( ".nomCombo" ).append("Neige");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés.");
		};
		
		if(sortA == "Glace" && sortB == "Terre" || sortA =="Terre" && sortB == "Glace"){
			$( ".nomCombo" ).append("Permafrost");
			$( ".effetCombo" ).append("Vous pouvez échanger la place d'un sort Eau avec celle d'un sort de Glace utilisé dans ce combo.");
		};
		
		if(sortA == "Glace" && sortB == "Vent" || sortA =="Vent" && sortB == "Glace"){
			$( ".nomCombo" ).append("Blizzard");
			$( ".effetCombo" ).append("Ajoutez 2Dd et 2DE à votre pool de dés.");
		};

		//INVERSION
		if(sortA == "Inversion" && sortB == "Lumiere" || sortA =="Lumiere" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Extinction");
			$( ".effetCombo" ).append("Ciblez une tourelle, elle subit un jeton état entrave.");		
		};
		
		if(sortA == "Inversion" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Guérison");
			$( ".effetCombo" ).append("Ajoutez 4DEau à votre pool de dés."); 
		};
		
		if(sortA == "Inversion" && sortB == "Metal" || sortA =="Metal" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Aimant");
			$( ".effetCombo" ).append("Vous pouvez interchanger la place deux sorts sur votre plateau.");			
		};
		
		if(sortA == "Inversion" && sortB == "Mort" || sortA =="Mort" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Résurrection");
			$( ".effetCombo" ).append("Ajoutez 2DRe à votre pool de dés.");
		};
		
		if(sortA == "Inversion" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Lumière");
			$( ".effetCombo" ).append("Ajoutez 2DE à votre pool de dés.");
		};
		/*
		if(sortA == "Inversion" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Soutien temporaire");
			$( ".effetCombo" ).append("Ajoutez 3DR à votre pool de dés. Supprime un état Incendie par réussite de DR.");
		};
		*/
		if(sortA == "Inversion" && sortB == "Protection" || sortA =="Protection" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Dégâts");
			$( ".effetCombo" ).append("Ajoutez 5Dd à votre pool de dés.");
		};
		
		if(sortA == "Inversion" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Conservation");
			$( ".effetCombo" ).append("Ajoutez 6DR à votre pool de dés.");
		};
		
		if(sortA == "Inversion" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Absorption");
			$( ".effetCombo" ).append("Supprimez un dé de chaque type de la pool adverse. Pour chaque dé supprimé de cette manière, ajoutez un dé de ce type à votre pool de dés.");
		};
		
		if(sortA == "Inversion" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Mort");
			$( ".effetCombo" ).append("Ajoutez 2DM à votre pool de dés.");
		};
		
		if(sortA == "Inversion" && sortB == "Sang" || sortA =="Sang" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Ichor");
			$( ".effetCombo" ).append("Votre directeur ne peut être tué lors de cet assaut. S'il est tué à cause d'une tourelle détruite, replacez le sur la tourelle la plus proche sur votre plateau.");
		};
		
		if(sortA == "Inversion" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Brahma Danda");
			$( ".effetCombo" ).append("Supprimez un nombre de dés de la pool adverse égale à un dixième de vos points de Prestige (arrondi à l’entier inférieur).");
		};
		
		if(sortA == "Inversion" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Plaquage");
			$( ".effetCombo" ).append("Aucun élève adverse ne peut bouger durant la prochaine phase 7-Déplacement des effectifs.");
		};
		
		if(sortA == "Inversion" && sortB == "Terre" || sortA =="Terre" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Apesanteur");
			$( ".effetCombo" ).append("Le joueur peut replacer tous les pions d'une de ses régions.");
		};
		
		if(sortA == "Inversion" && sortB == "Vent" || sortA =="Vent" && sortB == "Inversion"){
			$( ".nomCombo" ).append("Immobilisation");
			$( ".effetCombo" ).append("Supprimez tous les DAir de la pool de dés adverse");
		};

		//LUMIERE
		if(sortA == "Lumiere" && sortB == "Maladie" || sortA =="Maladie" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Photophobie");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés. Si un autre combo lumière a été lancé ce tour-ci, ajoutez 3DE de plus."); 
		};
		
		if(sortA == "Lumiere" && sortB == "Metal" || sortA =="Metal" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Éclat");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");			
		};
		
		if(sortA == "Lumiere" && sortB == "Mort" || sortA =="Mort" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Humiliation");
			$( ".effetCombo" ).append("Ciblez un joueur, il perd un nombre de points de Prestige égal au nombre d'effectif mort ce tour-ci.");
		};
		
		if(sortA == "Lumiere" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Signal de détresse");
			$( ".effetCombo" ).append("Permet de déplacer un effectif du plateau sur une tourelle du combo.");
		};
		
		if(sortA == "Lumiere" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Pierre de Soleil");
			$( ".effetCombo" ).append("Après le lancer adverse, le joueur adverse redirige 1D de chaque type vers une région non visée.");
		};
		
		if(sortA == "Lumiere" && sortB == "Protection" || sortA =="Protection" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Mur de lumière");
			$( ".effetCombo" ).append("Il est impossible de connaître la position de votre effectif lors de ce tour.");
		};
		
		if(sortA == "Lumiere" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Luminole");
			$( ".effetCombo" ).append("Si votre adversaire a activé un combo Métal ou Sang, il doit relancé 4D parmi ses réussites.");
		};
		
		if(sortA == "Lumiere" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Réfraction");
			$( ".effetCombo" ).append("Le joueur adverse redirige 5D vers une région de son choix.");
		};
		/*
		if(sortA == "Lumiere" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Mort");
			$( ".effetCombo" ).append("Ajoutez 2DM à votre pool de dés.");
		};
		
		if(sortA == "Lumiere" && sortB == "Sang" || sortA =="Sang" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Oxydation ???");
			$( ".effetCombo" ).append("Votre directeur ne peut être tué lors de cet assaut. S'il est tué à cause d'une tourelle détruite, replacez le sur la tourelle la plus proche sur votre plateau.");
		};
		*/
		if(sortA == "Lumiere" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Ankh???");
			$( ".effetCombo" ).append("Le joueur fait autant de dégât qu'il a de point de Prestige/4.");
		};
		
		if(sortA == "Lumiere" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Rayonnement");
			$( ".effetCombo" ).append("Tous les adversaires sont aveuglés par le Prestige de l'école du joueur. Ciblez un nombre de région selon vos points de Prestige ( 1 si au moins 25PP, 2 si au moins 50PP, 3 si au moins 75PP ), ces région deviennent inciblables.");
		};
		
		if(sortA == "Lumiere" && sortB == "Terre" || sortA =="Terre" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Soleil de minuit");
			$( ".effetCombo" ).append("Vous pouvez relancer gratuitement un sort ou un combo élémentaire.");
		};
		
		if(sortA == "Lumiere" && sortB == "Vent" || sortA =="Vent" && sortB == "Lumiere"){
			$( ".nomCombo" ).append("Vitesse lumière");
			$( ".effetCombo" ).append("Ajoutez 1Dd à votre pool de dés. Vous attaquerez en premier lors de la prochaine phase d'assaut.");
		};

		//MALADIE
		if(sortA == "Maladie" && sortB == "Metal" || sortA =="Metal" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Tétanos");
			$( ".effetCombo" ).append("Ajoutez 2DM à votre pool de dés. Si vous avez activé un combo métal lors de cette attaque ajoutez 4DM à la place.");			
		};
		
		if(sortA == "Maladie" && sortB == "Mort" || sortA =="Mort" && sortB == "Maladie"){
			$( ".nomCombo" ).append("AVC");
			$( ".effetCombo" ).append("Ajoutez 6DM à votre pool de dés.");
		};
		
		if(sortA == "Maladie" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Enfant de la nuit");
			$( ".effetCombo" ).append("Un joueur adverse ne peut plus activer son sort Lumière jusqu'à la fin du tour.");
		};
		
		if(sortA == "Maladie" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Maladie de Münchmeyer");
			$( ".effetCombo" ).append("Durant un tour, à chaque phase, le joueur adverse subit 1DM.");
		};
		
		if(sortA == "Maladie" && sortB == "Protection" || sortA =="Protection" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Immunisation");
			$( ".effetCombo" ).append("Une région ne peut subir d'état Maladie pendant un tour.");
		};
		
		if(sortA == "Maladie" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Pourridité");
			$( ".effetCombo" ).append("Le joueur ciblé adverse ne peut activé de sort ou combo biomage.");
		};
		
		if(sortA == "Maladie" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Jumeau maléfique");
			$( ".effetCombo" ).append("Vous pouvez retourner deux effectifs d'un adversaire. S'ils sont de la même discipline, l'un des deux meurt.");
		};
		
		if(sortA == "Maladie" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Immortalité");
			$( ".effetCombo" ).append("Ajoutez 5DRe à votre pool de dés.");
		};
		
		if(sortA == "Maladie" && sortB == "Sang" || sortA =="Sang" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Hémolyse");
			$( ".effetCombo" ).append("Ajoutez 5DM à votre pool de dés.");
		};
		
		if(sortA == "Maladie" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Bâton d'Asclépios");
			$( ".effetCombo" ).append("Ajoutez 5DRe, 5DR et 5DEau à votre pool de dés.");
		};
		
		if(sortA == "Maladie" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Morbidité");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés. Toute les tourelles ayant subies des pertes d'effectifs subissent un état Maladie.");
		};
		
		if(sortA == "Maladie" && sortB == "Terre" || sortA =="Terre" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Famine");
			$( ".effetCombo" ).append("Ajoutez 1DM à votre pool de dés.");
		};
		
		if(sortA == "Maladie" && sortB == "Vent" || sortA =="Vent" && sortB == "Maladie"){
			$( ".nomCombo" ).append("Nuage de poison");
			$( ".effetCombo" ).append("Les tourelles adjacentes à une tourelle touchée par un état Maladie, subissent elles aussi un état Maladie.");
		};

		//METAL		
		if(sortA == "Metal" && sortB == "Mort" || sortA =="Mort" && sortB == "Metal"){
			$( ".nomCombo" ).append("Saturnisme");
			$( ".effetCombo" ).append("Ajoutez 3DM à votre pool de dés.");
		};
		
		if(sortA == "Metal" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Metal"){
			$( ".nomCombo" ).append("Cachot");
			$( ".effetCombo" ).append("Lors de la prochaine phase 6- Déplacement, le joueur adverse ne peut pas déplacer l’effectif de la région ciblée.");
		};
		
		if(sortA == "Metal" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Metal"){
			$( ".nomCombo" ).append("Structure");
			$( ".effetCombo" ).append("Ajoutez 3DR à votre pool de dés. Vous pouvez relancer 2DR.");
		};
		
		if(sortA == "Metal" && sortB == "Protection" || sortA =="Protection" && sortB == "Metal"){
			$( ".nomCombo" ).append("Blindage");
			$( ".effetCombo" ).append("Chaque tourelle ne peut pas perdre plus de 2PdV d'un coup ce tour-ci.");
		};
		
		if(sortA == "Metal" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Metal"){
			$( ".nomCombo" ).append("Corrosion");
			$( ".effetCombo" ).append("Deux tourelles de la région adverse ciblée perdent un point de vie. Elle ne peuvent être détruites par ce combo.");
		};
		
		if(sortA == "Metal" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Metal"){
			$( ".nomCombo" ).append("Miroir");
			$( ".effetCombo" ).append("Si des DE sont présents dans la pool adverse, redirigez deux réussites vers l'adversaire");
		};
		
		if(sortA == "Metal" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Metal"){
			$( ".nomCombo" ).append("Cercueil");
			$( ".effetCombo" ).append("Supprimez 4DRe de la pool de dés ennemi.");
		};
		
		if(sortA == "Metal" && sortB == "Sang" || sortA =="Sang" && sortB == "Metal"){
			$( ".nomCombo" ).append("Anémie");
			$( ".effetCombo" ).append("Ajoutez 1DM à votre pool de dés. Les tourelles touchées par des DM subissent un état Entrave.");
		};
		
		if(sortA == "Metal" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Metal"){
			$( ".nomCombo" ).append("Gada");
			$( ".effetCombo" ).append("???");
		};
		
		if(sortA == "Metal" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Metal"){
			$( ".nomCombo" ).append("Magnétisme");
			$( ".effetCombo" ).append("Replacez tous vos élèves d'une même discipline si vous possédez un professeur de cette discipline.");
		};
		
		if(sortA == "Metal" && sortB == "Terre" || sortA =="Terre" && sortB == "Metal"){
			$( ".nomCombo" ).append("Renforcement");
			$( ".effetCombo" ).append("Ajoutez 3DR à votre pool de dés.");
		};
		
		if(sortA == "Metal" && sortB == "Vent" || sortA =="Vent" && sortB == "Metal"){
			$( ".nomCombo" ).append("Projection");
			$( ".effetCombo" ).append("Ajoutez 2Dd à votre pool de dés. Permet à 2Dd de cibler une région située derrière une région frontale si vous l'avez ciblée.");
		};

		//MORT	
		if(sortA == "Mort" && sortB == "Ombre" || sortA =="Ombre" && sortB == "Mort"){
			$( ".nomCombo" ).append("Assassinat");
			$( ".effetCombo" ).append("Ajoutez 1DM à votre pool de dés. Permet à un DM de cibler directement un pion sur le plateau adverse.");
		};
		
		if(sortA == "Mort" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Mort"){
			$( ".nomCombo" ).append("Stèle");
			$( ".effetCombo" ).append("Vous gagnez 1 point de Prestige par effectifs morts durant l'assaut.");
		};
		
		if(sortA == "Mort" && sortB == "Protection" || sortA =="Protection" && sortB == "Mort"){
			$( ".nomCombo" ).append("Immortalité");
			$( ".effetCombo" ).append("Les effectifs d'une région ne peuvent mourir lors de cette attaque.");
		};
		
		if(sortA == "Mort" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Mort"){
			$( ".nomCombo" ).append("Apocalypse");
			$( ".effetCombo" ).append("Ajoutez un nombre de Dd égal au nombre d'états états présents sur le plateau du joueur adverse.");
		};
		
		if(sortA == "Mort" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Mort"){
			$( ".nomCombo" ).append("Anéantissement ???");
			$( ".effetCombo" ).append("");
		};
		
		if(sortA == "Mort" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Mort"){
			$( ".nomCombo" ).append("Zombie");
			$( ".effetCombo" ).append("Le nombre de réussite de DM adverse est divisé par deux (arrondi à l'inférieur).");
		};
		
		if(sortA == "Mort" && sortB == "Sang" || sortA =="Sang" && sortB == "Mort"){
			$( ".nomCombo" ).append("Sacrifice");
			$( ".effetCombo" ).append("Tuez un de vos effectifs. Vous pouvez choisir parmi l'un des effets suivants :<br>- gagner 2 points de Prestige,<br>- vider votre main et repiocher le même nombre de carte,<br>- ajouter 4DRe à votre pool de dés.");
		};
		
		if(sortA == "Mort" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Mort"){
			$( ".nomCombo" ).append("Gungir");
			$( ".effetCombo" ).append("Ajoutez 1DM à votre pool de dés. Aucun effet ne peut empêcher vos DM d'être lancés et d'en appliquer les effets.");
		};
		
		if(sortA == "Mort" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Mort"){
			$( ".nomCombo" ).append("Retard");
			$( ".effetCombo" ).append("Ciblez une région, l'effectif présent ne peut être touché par des DM.");
		};
		
		if(sortA == "Mort" && sortB == "Terre" || sortA =="Terre" && sortB == "Mort"){
			$( ".nomCombo" ).append("Cimetière");
			$( ".effetCombo" ).append("Pour ce tour les élèves tués sont envoyés dans un cimetière personnel. Tant qu'il est rempli, ce cimetière reste actif jusqu'à la fin du jeu.");
		};
		
		if(sortA == "Mort" && sortB == "Vent" || sortA =="Vent" && sortB == "Mort"){
			$( ".nomCombo" ).append("Fantôme");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés. Une tourelle ayant subit entrave voit ses élèves déplacés sur une tourelle adjacente.");
		};

		//OMBRE			
		if(sortA == "Ombre" && sortB == "Pierre" || sortA =="Pierre" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Caverne");
			$( ".effetCombo" ).append("Vous ne pouvez être ciblé par un sort de divination jusqu'à la fin du tour.");
		};
		
		if(sortA == "Ombre" && sortB == "Protection" || sortA =="Protection" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Voile nocturne");
			$( ".effetCombo" ).append("Un sort adverse placé dans la région ciblée devient inutilisable jusqu'à la fin du tour. Le sort est tournée face cachée.");
		};
		
		if(sortA == "Ombre" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Dégradation");
			$( ".effetCombo" ).append("Le joueur adverse subit un nombre d’état Putréfaction égal au nombre de sort Ombre que vous possédez.");
		};
		
		if(sortA == "Ombre" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Doppleganger");
			$( ".effetCombo" ).append("Le joueur adverse retourne un pion élève à la vue de tous.");
		};
		/*
		if(sortA == "Ombre" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Cauchemar");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");
		};
		*/
		if(sortA == "Ombre" && sortB == "Sang" || sortA =="Sang" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Cauchemar");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");
		};
		
		if(sortA == "Ombre" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Hone karakasa");
			$( ".effetCombo" ).append("Vous pouvez activer 3 effets parmi les suivants : Gêle, Blizzard, Bourrasque, Pluie, Tempête.");
		};
		
		if(sortA == "Ombre" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Nuit");
			$( ".effetCombo" ).append("Le joueur adverse ne peut plus utiliser 2 sorts de son choix lors de cette attaque.");
		};
		
		if(sortA == "Ombre" && sortB == "Terre" || sortA =="Terre" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Sous-terrain");
			$( ".effetCombo" ).append("Vous pouvez échanger de place tous les pions placés sur les tourelles connectées aux sorts Ombre et Terre.");
		};
		
		if(sortA == "Ombre" && sortB == "Vent" || sortA =="Vent" && sortB == "Ombre"){
			$( ".nomCombo" ).append("Folie");
			$( ".effetCombo" ).append("Ajoutez 3DE à votre pool de dés.");
		};

		//PIERRE			
		if(sortA == "Pierre" && sortB == "Protection" || sortA =="Protection" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Muraille");
			$( ".effetCombo" ).append("L'adversaire ne peut cibler qu'une région au maximum.");
		};
		
		if(sortA == "Pierre" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Fossile");
			$( ".effetCombo" ).append("Vous pouvez, pour ce tour, aller chercher un élève du cimetière et l'utiliser.");
		};
		
		if(sortA == "Pierre" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Polissage");
			$( ".effetCombo" ).append("Ajoutez 7Dd à votre pool de dés.");
		};
		
		if(sortA == "Pierre" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Pierre philosophale");
			$( ".effetCombo" ).append("Lors d'un assaut, supprime 2DM d'une pool adverse.");
		};
		
		if(sortA == "Pierre" && sortB == "Sang" || sortA =="Sang" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Embolie pulmonaire");
			$( ".effetCombo" ).append("Ajoutez 4DM à votre pool de dés.");
		};
		
		if(sortA == "Pierre" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Nehushtan");
			$( ".effetCombo" ).append("Choissisez l'un des effets suivants :<br>- Replacez tous les sorts Eau de tous les plateaux,<br>- Ajoutez 5DE et 6Dd à votre pool de dés,<br>- Faites l'effet d'un combo Sang/Élement,<br>- Faites l'effet du combo Maladie/Élement,<br>- Gagnez 10 arcanes");
		};
		
		if(sortA == "Pierre" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Pétrification");
			$( ".effetCombo" ).append("Ajoutez 4DE à votre pool de dés.");
		};
		
		if(sortA == "Pierre" && sortB == "Terre" || sortA =="Terre" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Éclats");
			$( ".effetCombo" ).append("Ajoutez 5Dd à votre pool de dés.");
		};
		
		if(sortA == "Pierre" && sortB == "Vent" || sortA =="Vent" && sortB == "Pierre"){
			$( ".nomCombo" ).append("Érosion");
			$( ".effetCombo" ).append("Retire 1DR de la pool adverse.");
		};

		//PROTECTION			
		if(sortA == "Protection" && sortB == "Putrefaction" || sortA =="Putrefaction" && sortB == "Protection"){
			$( ".nomCombo" ).append("Stabilisation");
			$( ".effetCombo" ).append("Une région ne peut subir d'état Putréfaction pendant un tour.");
		};
		
		if(sortA == "Protection" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Protection"){
			$( ".nomCombo" ).append("Déviation");
			$( ".effetCombo" ).append("Un dé de chaque type est envoyé sur un joueur adjacent. Si 2 joueurs alors sur l'attaquant.");
		};
		/*
		if(sortA == "Protection" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Protection"){
			$( ".nomCombo" ).append("Protection philosophale");
			$( ".effetCombo" ).append("Lors d'un assaut, supprime 2DM d'une pool adverse.");
		};
		*/
		if(sortA == "Protection" && sortB == "Sang" || sortA =="Sang" && sortB == "Protection"){
			$( ".nomCombo" ).append("Globules blancs");
			$( ".effetCombo" ).append("Supprimez 2 états Maladie de votre plateau.");
		};
		
		if(sortA == "Protection" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Protection"){
			$( ".nomCombo" ).append("Neekhekh");
			$( ".effetCombo" ).append("Les pions placés dans la même région que votre directeur ne peuvent pas mourir durant cette attaque.");
		};
		
		if(sortA == "Protection" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Protection"){
			$( ".nomCombo" ).append("Trêve");
			$( ".effetCombo" ).append("Seuls les états peuvent touchés la région ciblée lors de cette attaque");
		};
		
		if(sortA == "Protection" && sortB == "Terre" || sortA =="Terre" && sortB == "Protection"){
			$( ".nomCombo" ).append("Mur de terre");
			$( ".effetCombo" ).append("Ciblez 1 région de votre plateau, elle ne peut subir de dégâts de sorts ou combo Électricité.");
		};
		
		if(sortA == "Protection" && sortB == "Vent" || sortA =="Vent" && sortB == "Protection"){
			$( ".nomCombo" ).append("Rempart de vent");
			$( ".effetCombo" ).append("Ajoutez 2DB à votre pool de dés. Si un combo Arc a été activé par l'adversaire. Ajoutez 4DB à la place.");
		};

		//PUTREFACTION			
		if(sortA == "Putrefaction" && sortB == "Reflexion" || sortA =="Reflexion" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Rénovation");
			$( ".effetCombo" ).append("Aller chercher le premier lieu de la défausse des améliorations pour l'ajouter aux lieux de votre école.");
		};
		
		if(sortA == "Putrefaction" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Cadavre");
			$( ".effetCombo" ).append("9DRe mais ces élèvent mourront à la fin du tour.");
		};
		
		if(sortA == "Putrefaction" && sortB == "Sang" || sortA =="Sang" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Infection");
			$( ".effetCombo" ).append("Ajoutez 4 états Maladie à votre pool de dés.");
		};
		/*
		if(sortA == "Putrefaction" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Neekhekh");
			$( ".effetCombo" ).append("Les pions placés dans la même région que votre directeur ne peuvent pas mourir durant cette attaque.");
		};
		*/
		if(sortA == "Putrefaction" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Contamination");
			$( ".effetCombo" ).append("Lors de la prochaine phase d'extraction, le joueur adverse devra subir un état Putréfaction sur chaque tourelle adjacente à une tourelle déjà touchée.");
		};
		
		if(sortA == "Putrefaction" && sortB == "Terre" || sortA =="Terre" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Humus");
			$( ".effetCombo" ).append("Défausser un sort présent sur votre plateau, vous gagnez 8 arcanes.");
		};
		
		if(sortA == "Putrefaction" && sortB == "Vent" || sortA =="Vent" && sortB == "Putrefaction"){
			$( ".nomCombo" ).append("Miasme");
			$( ".effetCombo" ).append("Le joueur adverse subit 1 état Maladie. Les états Putréfaction de votre pool peuvent cibler plusieurs régions.");
		};

		//REFLEXION	
		/*
		if(sortA == "Reflexion" && sortB == "Resurrection" || sortA =="Resurrection" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Cadavre");
			$( ".effetCombo" ).append("9DRe mais ces élèvent mourront à la fin du tour.");
		};
		
		if(sortA == "Reflexion" && sortB == "Sang" || sortA =="Sang" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Infection");
			$( ".effetCombo" ).append("Ajoutez 4 états Maladie à votre pool de dés.");
		};
		*/
		if(sortA == "Reflexion" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Pasha");
			$( ".effetCombo" ).append("Permet de relancer 7D de votre pool");
		};
		
		if(sortA == "Reflexion" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Projection");
			$( ".effetCombo" ).append("Déplacez tous vos effectifs de la ligne de front vers sur la ligne arrière.");
		};
		
		if(sortA == "Reflexion" && sortB == "Terre" || sortA =="Terre" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Statuette");
			$( ".effetCombo" ).append("Vous pouvez copier un élève présent sur le plateau pour ce tour. La statuette se sacrifiera à la place de l'élève s'il y a un DM.");
		};
		
		if(sortA == "Reflexion" && sortB == "Vent" || sortA =="Vent" && sortB == "Reflexion"){
			$( ".nomCombo" ).append("Onde choc");
			$( ".effetCombo" ).append("Ajoutez 4Dd à votre pool de dés. Permet à 2Dd de cibler aussi une région d'un joueur adjacent au joueur ciblé.");
		};

		//RESURRECTION	
		if(sortA == "Resurrection" && sortB == "Sang" || sortA =="Sang" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Réincarnation");
			$( ".effetCombo" ).append("Ajoutez 3DRe à votre pool de dés. Chaque réussite de vos DRe vous permet de remplacer un élève de votre plateau par un professeur du cimetière.");
		};
		
		if(sortA == "Resurrection" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Rame de Chiron");
			$( ".effetCombo" ).append("Durant le reste du tour, les joueurs adverses qui ressuscitent des effectifs doivent vous donner 2 arcanes.");
		};
		
		if(sortA == "Resurrection" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Entre-deux mondes");
			$( ".effetCombo" ).append("Ajoutez 10DRe et 5DM à votre pool de dé. Vous pouvez appliquer les effets d'un nombre de DRe égal à la différence entre les réussites des DRe et celles des DM.");
		};
		
		if(sortA == "Resurrection" && sortB == "Terre" || sortA =="Terre" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Paradis");
			$( ".effetCombo" ).append("Ajoutez 2DRe à votre pool de dés.");
		};
		
		if(sortA == "Resurrection" && sortB == "Vent" || sortA =="Vent" && sortB == "Resurrection"){
			$( ".nomCombo" ).append("Souffle de vie");
			$( ".effetCombo" ).append("Ajoutez 2DRe à votre pool de dés.");
		};

		//SANG	
		/*
		if(sortA == "Sang" && sortB == "Sceptre" || sortA =="Sceptre" && sortB == "Sang"){
			$( ".nomCombo" ).append("Rame de Chiron");
			$( ".effetCombo" ).append("Durant le reste du tour, les joueurs adverses qui ressuscitent des effectifs doivent vous donner 2 arcanes.");
		};
		*/
		if(sortA == "Sang" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Sang"){
			$( ".nomCombo" ).append("Poche de transfusion");
			$( ".effetCombo" ).append("Lors de cet assaut, divisez le nombre de réussite de DM adverse par 2.");
		};
		
		if(sortA == "Sang" && sortB == "Terre" || sortA =="Terre" && sortB == "Sang"){
			$( ".nomCombo" ).append("Fertilisation");
			$( ".effetCombo" ).append("Ajoutez 5D à votre pool de dés si vous avez activé un sort ou un combo Cellule végétale.");
		};
		
		if(sortA == "Sang" && sortB == "Vent" || sortA =="Vent" && sortB == "Sang"){
			$( ".nomCombo" ).append("Pluie de sang");
			$( ".effetCombo" ).append("Ajoutez 5DE à votre pool de dés.");
		};

		//SCEPTRE	
		if(sortA == "Sceptre" && sortB == "Suspension" || sortA =="Suspension" && sortB == "Sceptre"){
			$( ".nomCombo" ).append("Bâton de Seshat");
			$( ".effetCombo" ).append("À chaque activation, ajoutez 1 à votre compteur de Seshat. Lorsque vous atteignez 10, un directeur adverse que vous ciblez meurt.");
		};
		
		if(sortA == "Sceptre" && sortB == "Terre" || sortA =="Terre" && sortB == "Sceptre"){
			$( ".nomCombo" ).append("Amenonuhoko");
			$( ".effetCombo" ).append("Vous pouvez cibler jusqu'à 2 régions adverses. Ajoutez 5DRe à votre pool de dés.");
		};
		
		if(sortA == "Sceptre" && sortB == "Vent" || sortA =="Vent" && sortB == "Sceptre"){
			$( ".nomCombo" ).append("Vajra");
			$( ".effetCombo" ).append("Les effets de vos dés ne peuvent être annulés.");
		};

		//SUSPENSION		
		if(sortA == "Suspension" && sortB == "Terre" || sortA =="Terre" && sortB == "Suspension"){
			$( ".nomCombo" ).append("Zéro G");
			$( ".effetCombo" ).append("Ciblez 3 régions, vous pouvez déplacer jusqu'à 4 élèves et les replacer comme vous le souhaiter.");
		};
		
		if(sortA == "Suspension" && sortB == "Vent" || sortA =="Vent" && sortB == "Suspension"){
			$( ".nomCombo" ).append("Œil du cyclone");
			$( ".effetCombo" ).append("Le joueur adverse choisit une zone de 4 sorts, ils sont mélangés et replacés aléatoirement.");
		};

		//TERRE
		if(sortA == "Terre" && sortB == "Vent" || sortA =="Vent" && sortB == "Terre"){
			$( ".nomCombo" ).append("Poussière");
			$( ".effetCombo" ).append("Ajoutez 2DE à votre pool de dés.");
		};
	});
});
