const cells = document.getElementsByClassName('cell')
const x_points = document.getElementById('x')
const o_points = document.getElementById('o')

const possibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let player_turn = 'x'
let x_marked = []
let o_marked = []
let ended = false

let nextTurn = () => {
    if (player_turn == 'x') { player_turn = 'o' }
    else { player_turn = 'x' }
}

let endedGame = () => {
    ended = true
    document.getElementsByClassName("game")[0].classList.add('ended')
}

let free = (cell) => {
    if(cell.value==' '){
        return true;
    } return false;
}

let result = (text) => {
    document.getElementsByClassName('text')[0].innerHTML = text
}

let reset = () => {
    player_turn = 'x'
    for(let cell of cells){
        cell.value = ' '
        cell.classList = ['cell']
    }
    x_marked = []
    o_marked = []
}

let increment = (w) => {
    if(w == 'x'){
        x_points.innerHTML = parseInt(x_points.innerHTML)+1
    }else{
        o_points.innerHTML = parseInt(o_points.innerHTML)+1
    }
}

let checkWin = () => {
    for (const combination of possibilities) {
        if (combination.every(x => x_marked.includes(x))) {
            result('ha vinto il giocatore X!')
            increment('x')
            endedGame()
            return true;
        }
        if (combination.every(x => o_marked.includes(x))) {
            result('ha vinto il giocatore O!')
            increment('o')
            endedGame()
            return true;
        }
    }
    return false;
}

let mark = (cell) => {
    if(!ended) {
        if(free(cell)){
            cell.value = player_turn
            cell.classList.add(`${player_turn}-marked`)
            if(player_turn == 'x'){
                x_marked.push(parseInt(cell.id))
            } else {
                o_marked.push(parseInt(cell.id))
            }
            nextTurn()
            result(`player: ${player_turn.toUpperCase()}`)
            if(!checkWin() && x_marked.length + o_marked.length >= 9){
                result('il gioco è finito in pareggio')
                endedGame()
            }
        }
    }
}
