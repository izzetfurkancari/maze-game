const { Engine, Render, Runner, World, Bodies, Body, Events }  = Matter

const WIDTH = window.innerWidth - 3.5
const HEIGHT = window.innerHeight - 3.5
const M = 3, N = 3
const UNIT_LENGTH_X = WIDTH / M
const UNIT_LENGTH_Y = HEIGHT / N

const engine = Engine.create()
engine.world.gravity.y = 0
const { world } = engine
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width: WIDTH,
        height: HEIGHT
    }
})
Render.run(render)
Runner.run(Runner.create(), engine)

// walls
const walls = [
    Bodies.rectangle(WIDTH/2, 0, WIDTH, 2, {
        isStatic: true
    }),
    Bodies.rectangle(WIDTH/2, HEIGHT, WIDTH, 2, {
        isStatic: true
    }),
    Bodies.rectangle(0, HEIGHT/2, 2, HEIGHT, {
        isStatic: true
    }),
    Bodies.rectangle(WIDTH, HEIGHT/2, 2, HEIGHT, {
        isStatic: true
    })
]