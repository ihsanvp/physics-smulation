const SCROLLBAR_SIZE = 20

export default class Screen {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.elements = []

        this._setCanvas()
        this._adjustScreenSize()
        this._mount()
    }

    _adjustScreenSize() {
        this.canvas.width = this.width
        this.canvas.height = this.height

        this.canvas.style.width = this.width + "px"
        this.canvas.style.height = this.height + "px"

        this.canvas.style.border = "1px solid black"
    }
    
    _setCanvas() {
        this.canvas = document.createElement("canvas")
        this.context = this.canvas.getContext("2d")
    }

    _mount() {
        document.body.appendChild(this.canvas)
    }

    add(el) {
        this.elements.push(el)
    }

    draw(dt) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (const el of this.elements) {
            el.draw(this.context, dt)
        }
    }

    static adjustResize(screen) {
        function adjust() {
            screen.canvas.width = window.document.documentElement.clientWidth - SCROLLBAR_SIZE
            screen.canvas.height = window.innerHeight - SCROLLBAR_SIZE

            screen.canvas.style.width = window.document.documentElement.clientWidth - SCROLLBAR_SIZE + "px"
            screen.canvas.style.height = window.innerHeight - SCROLLBAR_SIZE + "px"
        }

        window.addEventListener("resize", adjust)
    }
}