for index in range(5):
    music.play_tone(220, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.NORTH)
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.NORTH_EAST)
    music.play_tone(311, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.EAST)
    music.play_tone(330, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.SOUTH_EAST)
    music.play_tone(220, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.SOUTH)
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.SOUTH_WEST)
    music.play_tone(311, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.WEST)
    music.play_tone(659, music.beat(BeatFraction.SIXTEENTH))
    # loops
    basic.show_arrow(ArrowNames.NORTH_WEST)