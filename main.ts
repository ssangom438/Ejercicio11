function baile () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Forever)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    basic.pause(2000)
    music.stopMelody(MelodyStopOptions.All)
}
input.onButtonPressed(Button.A, function () {
    Baile = 3
})
function baile_invers () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    basic.pause(2000)
    music.stopMelody(MelodyStopOptions.All)
}
input.onButtonPressed(Button.B, function () {
    if (Baile == 1) {
        Baile = 2
    }
    if (Baile == 2) {
        Baile = 1
    }
    if (Baile == 3) {
        Baile = 1
    }
})
let Baile = 0
Baile = 1
basic.forever(function () {
    if (Baile == 1) {
        baile()
    }
    if (Baile == 2) {
        baile_invers()
    }
    if (Baile == 3) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
