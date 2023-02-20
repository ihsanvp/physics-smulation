import Block from "./block.js"
import Screen from "./screen.js"

export default class Simulation {
    constructor({
        speed = 1
    }) {
        this.speed = speed / 10000
        this.screen = new Screen(800, 600)
        this.lastTimestamp = 0

        this._init()
    }

    adjustScreenResize() {
        Screen.adjustResize(this.screen)
        return this
    }

    _

    _init() {
        this.screen.add(new Block(50, 10, {color: "red"}).setForce({y: 1}).setVelocity({x: 20}))
    }

    _loop(timestamp) {
        const secondsPassed = (timestamp - this.lastTimestamp) / 1000
        const fps = Math.round(1 / secondsPassed)
        const dt = fps * this.speed
        this.lastTimestamp = timestamp

        // console.log(dt)

        this.screen.draw(dt)
        window.requestAnimationFrame(this._loop.bind(this))
    }

    run() {
        window.requestAnimationFrame(this._loop.bind(this))
    }
}