export const generateBoard = (x: number, y: number, bombsCount: number) => {
  const board: { isBomb: boolean }[][] = Array(x).fill(Array(y).fill({}).map(() => ({ isBomb: false })))

  let bombsLeft = bombsCount

  let breaker = 10

  while(bombsLeft > 0) {
    let candidate = {
      x: Math.floor(Math.random() * x),
      y: Math.floor(Math.random() * y)
    }

    if (!board[candidate.x][candidate.y].isBomb) {
      board[candidate.x][candidate.y].isBomb = true
      bombsLeft = bombsLeft - 1
    }

    breaker = breaker - 1
    if(breaker < 0) break
  }

  return board
}
