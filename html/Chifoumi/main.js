
			var elements = ['pierre','feuille','ciseaux'];

			var scoreJoueur = 0;
			var scoreOrdinateur = 0;

			// affichage  tour et  score
			var affichageResultat;
			var score;
			var toursDeJeu = 16;
			var numeroTour= 0;
			var messageDebut = function(){
				resultat('<p>Bienvenu<br/>Débutez la partie ! </p>');
			};

			// tour de jeu
			var tour = function(){
				if(numeroTour <= toursDeJeu){
					numeroTour++;

					// Réponses
					var reponseOrdinateur = elements[nombreAleatoire()-1];
					console.log(reponseOrdinateur);

						affichageResultat = '<h2>Résultat du tour</h2><p>';

					// Il y a trois cas possibles égalité
					if(reponse == reponseOrdinateur){
						affichageResultat = 'Vous avez choisi '  + reponse + ' comme l\'ordinateur, \n Il y a égalité le score ne change pas.';
					}
					else{
					// Si les combinaisons  le joueur gagne Sinon l'ordinateur gagne

						if((reponse == 'pierre' && reponseOrdinateur == 'ciseaux') ||(reponse == 'feuille' && reponseOrdinateur == 'pierre') ||(reponse == 'ciseaux' && reponseOrdinateur == 'feuille')){
							scoreJoueur++;
							affichageResultat = 'Vous avez choisi ' + reponse + ' et l\'ordinateur ' + reponseOrdinateur + '. <br/> Vous avez gagné le tour.';
						}


						else{
							scoreOrdinateur++;
							affichageResultat = 'Vous avez choisi ' + reponse + ' et l\'ordinateur ' + reponseOrdinateur + '. <br/> Vous avez perdu le tour.';
						}
					}
					// score

					var texteScore = function(){
						return '</h2><p> Joueur : ' + scoreJoueur + '<br> Ordinateur : ' + scoreOrdinateur + '</p>';
					}

					if(numeroTour == toursDeJeu){
						affichageResultat += '</p><h2>Score final' + texteScore();
						if(scoreJoueur > scoreOrdinateur){
							affichageResultat += '<h1>Vous avez gagné la partie</h1>';
						}
						else{
							if(scoreJoueur < scoreOrdinateur){
								affichageResultat += '<h1>Vous avez perdu la partie</h1>';
							}
							else{
								affichageResultat += '<h1>Vous terminez la partie sur une parfaite égalitée </h1>';
							}
						}
					}
					else{
						affichageResultat += '</p><h2>Scores' + texteScore();
					}
					// résultat

						resultat(affichageResultat);
				}else{
					resultat('<p style="color:red; font-size: 24px;">Partie terminée</p>' + affichageResultat);
				}
			};
