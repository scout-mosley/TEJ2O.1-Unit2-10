/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: scout mosley
* Created on: oct 2025
* This program read amount of light and shows it in neopixels
*/

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)

    const lightLevel = input.lightLevel()
    const strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
    strip.clear()

    //show pixles depending on light level

    if (lightLevel <= 51) {
        strip.show()
    }

    if (lightLevel > 52) {
        strip.range(0, 1).show()
    }

    if (lightLevel > 104) {
        strip.range(0, 2).show()
    }

    if (lightLevel > 156) {
        strip.range(0, 3).show()
    }

    if (lightLevel > 208) {
        strip.range(0, 4).show()
    }
