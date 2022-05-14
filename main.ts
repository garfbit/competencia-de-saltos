input.onGesture(Gesture.FreeFall, function () {
    if (!(game.isGameOver())) {
        Saltos += 1
        game.setScore(Saltos)
        basic.showNumber(Saltos)
    }
})
let Saltos = 0
game.setScore(0)
Saltos = 0
game.startCountdown(8000)
