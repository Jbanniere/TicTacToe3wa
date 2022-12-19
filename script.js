// - Mettre des addEventListener
// - Faire un tableau avec le jeu [" "," "," "]
// - Identifier les cas de victoires [ [0,1,2] , [3,4,5] ]
// - bouton restart
// - function jeuGagnant
// - function changer de joueur


document.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelectorAll('.box')
    let player = document.getElementById('player')
    const restart = document.querySelector('button')

    let gameCase = ["", "", ""]
    let nbClick = 0
    let tour = 0


    /**
     * 
     * Fonction pour afficher dans le HTML
     * 
     */
    const playerTurn = (i) => {
        nbClick++
        if (nbClick % 2 === 1) {
            player.innerText = "PLayer X à vous de jouer !"
            box[i].innerText = "O"
        }
        else if (nbClick % 2 === 0) {
            player.innerText = "PLayer O à vous de jouer !"
            box[i].innerText = "X"
        }
        box[i].removeEventListener('click', playerTurn())
        console.log(nbClick)
    }


    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', () => playerTurn(i))
    }

    /**
     * 
     * Function pour savoir qui a gagné
     * 
     */

    let winGame = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWin = () => {
        for (let i = 0 ; i < gameCase.length ; i++) {
            
        }
    }


})
