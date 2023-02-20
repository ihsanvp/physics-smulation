import Vector from "./vec.js"

export default class Block {
    constructor(width, height, {
        pos = Vector.zero(),
        color = "black"
    }) {
        this.width = width
        this.height = height
        this.pos = pos
        this.color = color

        this.force = Vector.zero()
        this.velocity = Vector.zero()
    }

    setPos({x = this.pos.x, y = this.pos.y}) {
        this.pos.x = x
        this.pos.y = y

        return this
    }

    setForce({x = this.force.x, y = this.force.y}) {
        this.force.x = x
        this.force.y = y

        return this
    }

    setVelocity({x = this.velocity.x, y = this.velocity.y}) {
        this.velocity.x = x
        this.velocity.y = y

        // console.log(this.force, this.velocity, this.pos)

        return this
    }

    _calcultePos(dt) {
        this.setVelocity({
            x: this.velocity.x + this.force.x * dt,
            y: this.velocity.y + this.force.y * dt
        })

        // console.log(this.force, this.velocity, this.pos)

        this.setPos({
            x: this.pos.x + this.velocity.x * dt,
            y: this.pos.y + this.velocity.y * dt
        })

        // console.log(this.velocity)
    }

    draw(context, dt) {
        const initialColor = context.fillStyle
        this._calcultePos(dt)

        context.fillStyle = this.color
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height)
        context.fillStyle = initialColor
    }


}