for (let index = 0; index < 1; index++) {
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.North)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.NorthEast)
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.East)
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.SouthEast)
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.South)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.SouthWest)
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.West)
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    // loops
    basic.showArrow(ArrowNames.NorthWest)
}
music.setVolume(45)
music.playMelody("D - F - A - G - ", 289)
soundExpression.happy.playUntilDone()
