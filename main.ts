/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: scout mosley
* Created on: Oct 2025
* This program read amount of light and shows it in neopixels.
*/

let neopixelStrip: neopixel.Strip = null
let level = input.lightLevel()
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

//reads light level
if (level <= 51)    
strip.setPixelColor (0,neopixel.colors(NeoPixelColors.Black))
    
if (level > 52)
strip.setPixelColor (0,neopixel.colors(NeoPixelColors.Red))

if (level > 104)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))

if (level > 156)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))


if (level > 208)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
