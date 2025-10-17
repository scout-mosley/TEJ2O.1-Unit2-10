/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: scout mosley
* Created on: oct 2025
* This program read amount of light and shows it in neopixels
*/

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)

    const lightLevel = input.lightLevel()
    let neopixelStrip: neopixel.Strip = null


    //show pixles depending on light levels

    if (lightLevel <= 51) {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0 + 1 + 2 + 3, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightLevel > 52) {
    }

    if (lightLevel > 104) {
    }

    if (lightLevel > 156) {
    }

    if (lightLevel > 208) {

    }
