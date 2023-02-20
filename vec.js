export default class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static zero() {
        return new Vector(0, 0)
    }
}