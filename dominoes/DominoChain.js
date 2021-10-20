export class DominoChain {
  constructor(dominoes) {
    if (dominoes.length === 0) {
      throw new Error('Expected dominoes.length to be greater or equal 1.')
    }

    this.dominoes = dominoes
    this._nextDominoIndexToFall = 0
  }

  step() {
    this.dominoes[this._nextDominoIndexToFall].hasFallen = true
    this._nextDominoIndexToFall++
  }

  hasCompleted() {
    return this._nextDominoIndexToFall >= this.dominoes.length
  }
}
