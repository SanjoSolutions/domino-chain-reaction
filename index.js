import { Color } from './dominoes/Color.js'
import { Domino } from './dominoes/Domino.js'
import { DominoChain } from './dominoes/DominoChain.js'
import { Position } from './dominoes/Position.js'
import { DominoChainRenderer } from './dominoes/rendering'
import { wait } from './wait.js'

export async function main() {
  const dominoChain = new DominoChain([
    new Domino(new Color('red'), new Position(0, 0)),
    new Domino(new Color('blue'), new Position(10, 0)),
    new Domino(new Color('yellow'), new Position(20, 0))
  ])

  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  const dominoChainRenderer = new DominoChainRenderer(canvas)

  dominoChainRenderer.render(dominoChain)

  while (!dominoChain.hasCompleted()) {
    dominoChain.step()
    dominoChainRenderer.render(dominoChain)
    await wait(1000)
  }
}
