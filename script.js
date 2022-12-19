// - Mettre des addEventListener
// - Faire un tableau avec le jeu [" "," "," "]
// - Identifier les cas de victoires [ [0,1,2] , [3,4,5] ]
// - bouton restart
// - function jeuGagnant
// - function changer de joueur


document.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelectorAll('.box')
    let player = document.getElementById('player')
    const restartBtn = document.querySelector('button')
    const id1 = document.getElementById('0-1')
    let boxScoreX = document.getElementById('scoreX')
    let boxScoreO = document.getElementById('scoreO')
    let scoreX = 0
    let scoreO = 0

    let tour = 0


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

    /**
     * 
     * Function pour savoir qui a gagné
     * 
     */
    const check = () => {
        for (let i = 0; i < winGame.length; i++) {
            let gameCase = ["", "", ""]

            if (box[winGame[i][0]].innerText === "X") {
                gameCase[0] = true
            }
            else if (box[winGame[i][0]].innerText === "O") {
                gameCase[0] = false
            }
            if (box[winGame[i][1]].innerText === "X") {
                gameCase[1] = true
            }
            else if (box[winGame[i][1]].innerText === "O") {
                gameCase[1] = false
            }

            if (box[winGame[i][2]].innerText === "X") {
                gameCase[2] = true
            }
            else if (box[winGame[i][2]].innerText === "O") {
                gameCase[2] = false
            }
            whoWin(gameCase[0], gameCase[1], gameCase[2])
        }
    }

    const whoWin = (first, second, third) => {
        if (first === true && second === true && third === true) {
            scoreX++
            boxScoreX.innerText = scoreX
            alert('Player X vous marquez un point !')
            
        }

        if (first === false && second === false && third === false) {
            scoreO++
            boxScoreO.innerText = scoreO
            alert('Player O vous marquez un point !')
        }
    }


    /**
     * 
     * Fonction pour afficher dans le HTML
     * 
     */
    const playerTurn = (element) => {
        if (element.innerText === "") {
            tour++
            if (tour % 2 === 1) {
                player.innerText = "PLayer X à vous de jouer !"
                element.innerText = "O"

            }
            else if (tour % 2 === 0) {
                player.innerText = "PLayer O à vous de jouer !"
                element.innerText = "X"
            }
            console.log(element)
        }
        check()

    }

    box.forEach(element =>
        element.addEventListener('click', () =>
            playerTurn(element)
        )
    )

    /**
     * 
     * Function pour restart le game
     * 
     */
    box.forEach(element =>
        restartBtn.addEventListener('click', () =>
            element.innerText = " "
        )
    )
})
