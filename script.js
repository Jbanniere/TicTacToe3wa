// - Mettre des addEventListener
// - Faire un tableau avec le jeu [" "," "," "]
// - Identifier les cas de victoires [ [0,1,2] , [3,4,5] ]
// - bouton restart
// - function jeuGagnant
// - function changer de joueur


document.addEventListener('DOMContentLoaded', () => {

    const gameCase = document.querySelector('.container')
    const box = document.querySelectorAll('.box')
    let player = document.getElementById('player')
    const restart = document.querySelector('button')

    const game = ["", "", ""]
    let nbClick = 0
    

   /**
    * 
    * Fonction pour afficher dans le HTML
    * 
    */
    
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', () => {
            nbClick++
            if (nbClick % 2 === 1) {
                player.innerText = "PLayer O à vous de jouer !"
                box[i].innerText = "O"
                box[i].removeEventListener()
            }
            else if (nbClick % 2 === 0) {
                player.innerText = "PLayer X à vous de jouer !"
                box[i].innerText = "X"
                box[i].removeEventListener()
            }
           
        })
    }
    
    /**
    * 
    * Function pour savoir qui a gagné
    * 
    */
    

})
