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
            let scoreX = document.getElementById('scoreX')
            let scoreO = document.getElementById('scoreO')

            let nbClick = 0
            let tour = 0

            let gameCase = ["", "", ""]
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
             * Fonction pour afficher dans le HTML
             * 
             */
            const playerTurn = (element) => {
                if (element.innerText === "") {
                    nbClick++
                    if (nbClick % 2 === 1) {
                        player.innerText = "PLayer X à vous de jouer !"
                        element.innerText = "O"

                    }
                    else if (nbClick % 2 === 0) {
                        player.innerText = "PLayer O à vous de jouer !"
                        element.innerText = "X"
                    }
                    console.log(element)
                }

            }

            box.forEach(element =>
                element.addEventListener('click', () =>
                    playerTurn(element)
                )
            )


            /**
             * 
             * Function pour savoir qui a gagné
             * 
             */

            const whoWin = () => {
                    if (
                        box[0].innerHTML === "X" &&
                        box[1].innerHTML === "X" &&
                        box[2].innerHTML === "X"
                    ) {
                        scoreX++
                        return true
                    }
                    if (
                        box[3].innerHTML === "X" &&
                        box[4].innerHTML === "X" &&
                        box[5].innerHTML === "X"
                    ) {
                        scoreX++
                        return true
                    }
                    if (
                        box[6].innerHTML === "X" &&
                        box[7].innerHTML === "X" &&
                        box[8].innerHTML === "X"
                    ) {
                        scoreX++
                        return true
                    }
                    if (
                        box[0].innerHTML === "X" &&
                        box[3].innerHTML === "X" &&
                        box[6].innerHTML === "X"
                        ) {
                        scoreX++
                        return true
                    }
                    if (
                        box[1].innerHTML === "X" &&
                        box[4].innerHTML === "X" &&
                        box[7].innerHTML === "X"
                        ) {
                        scoreX++
                        return true
                    }
                    if (
                        box[2].innerHTML === "X" &&
                        box[5].innerHTML === "X" &&
                        box[8].innerHTML === "X"
                        ) {
                        scoreX++
                        return true
                    }
                     if (
                        box[0].innerHTML === "X" &&
                        box[4].innerHTML === "X" &&
                        box[8].innerHTML === "X"
                        ) {
                        scoreX++
                        return true
                    }
                     if (
                        box[0].innerHTML === "X" &&
                        box[4].innerHTML === "X" &&
                        box[6].innerHTML === "X"
                        ) {
                        scoreX++
                        return true
                    }



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
