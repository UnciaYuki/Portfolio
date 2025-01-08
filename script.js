/*
Etape 1 : J'analyse la donnée
Etape 2 : Je créer mon modèle de carte en HTML
Etape 3 : Je récupère la donnée et je l'affiche en console
Etape 4 : Je stock le chemin vers la donnée dans des variables
Etape 5 : Je créer les cartes remplies dynamiquement 
6. Je les envois dans le DOM
*/

//on donne l'url du site à appeller
fetch('data.json')
    .then((rep) =>
        rep.json())
    .then(donnee => {
        // Affiche les données
        afficheLesInfos(donnee);
        console.log(donnee)

        // donnee.produits est un tableau
        // je le parcours : 
        // pour chacun des produit du tableau je l'affiche :
        donnee.projets.forEach(projets => {
            afficheUnProjet(projets)
        })
    });

    function afficheUnProjet(projets) {
        // Role: afficher un produit dans la div qui a l'id divProduit
        // parametre: un produit du jeu de donnée
        // retour : rien
        let nom = projets.nom
        let description = projets.description
        let url = projets.url
        let tags = projets.tag
        document.querySelector("#divProject").innerHTML += 
    
        `
        <img src="assets/FF.png" alt="Final Fantasy" />
                    <div class="cardBody">
                        <h2 class="cardTitle">${nom}</h2>
                        <p class="cardText">${description}</p>
                        <a href="https://unciayuki.github.io/ArtistWebPage/" target="_blank"
                            title="Lien vers ArtistWebPage">En savoir plus →</a>
                        <div>
                            <ul>
                                <li>
                                    <div class="text2 flex spaceEvenly">
                                        <h4 class="tag">${tags}</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
        `
    }