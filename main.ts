input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("De 1...")
    basic.showNumber(r1)
    basic.showString("De 2...")
    basic.showNumber(r2)
    basic.showString("De 3...")
    basic.showNumber(r3)
    basic.showString("De 4...")
    basic.showNumber(r4)
    basic.showString("De 5...")
    basic.showNumber(r5)
    basic.showString("De 6...")
    basic.showNumber(r6)
})
input.onGesture(Gesture.Shake, function () {
    face = randint(1, 6)
})
let r6 = 0
let r5 = 0
let r4 = 0
let r3 = 0
let r2 = 0
let r1 = 0
let face = 0
face = 0
basic.forever(function () {
    if (face == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        r1 += 1
    }
    if (face == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        r2 += 1
    }
    if (face == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        r3 += 1
    }
    if (face == 4) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        r4 += 1
    }
    if (face == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        r5 += 1
    }
    if (face == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
        r6 += 1
    }
})
