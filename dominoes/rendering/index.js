const DOMINO_WIDTH = 5
const DOMINO_HEIGHT = 15

export class DominoChainRenderer {
  constructor(canvas) {
    this._canvas = canvas
    this._context = canvas.getContext('2d')
    this._renderDomino = this._renderDomino.bind(this)
  }

  render(dominoChain) {
    dominoChain.dominoes.forEach(this._renderDomino)
  }

  _renderDomino(domino) {
    const colorCode = domino.color.code
    this._context.strokeStyle = colorCode
    this._context.fillStyle = colorCode
    this._context.beginPath()
    this._context.rect(domino.position.x, domino.position.y, DOMINO_WIDTH, DOMINO_HEIGHT)
    if (domino.hasFallen) {
      this._context.fill()
    }
    this._context.stroke()
  }
}
