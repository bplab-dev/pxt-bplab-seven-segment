# 7-Segment Display Extension for MakeCode

![7-Segment Image](./icon.png)

This extension allows you to control TM1637 based 4-digit 7-segment LED displays with the micro:bit.

## 🚀 Features

- Easy control of TM1637 LED displays
- Support for up to 4 digits
- Display numbers and hexadecimal values
- Adjustable brightness control
- Show/hide decimal points
- Simple on/off control
- Can be registered as a MakeCode extension for easy use

## Blocks

### 🔍 Summary: What each block does

| **Block ID**                 | **Function**                                   |
|-----------------------------|-----------------------------------------------|
| [`create`](#1-create-display-block) | Initialize a new TM1637 LED display |
| [`showNumber`](#2-show-number-block) | Display a decimal number |
| [`showHex`](#3-show-hex-number-block) | Display a hexadecimal number |
| [`showbit`](#4-show-digit-block) | Show a single digit at specific position |
| [`showDP`](#5-show-decimal-point-block) | Show/hide decimal point |
| [`intensity`](#6-set-intensity-block) | Set display brightness |
| [`clear`](#7-clear-display-block) | Clear the display |
| [`on`](#8-display-onoff-blocks) | Turn display on |
| [`off`](#8-display-onoff-blocks) | Turn display off |

### 1. Create Display Block

```typescript
//% blockId="TM1637_create" block="CLK %clk|DIO %dio|intensity %intensity|LED count %count"
export function create(clk: DigitalPin, dio: DigitalPin, intensity: number, count: number): TM1637LEDs
```

- 🔹 Description
  - Initializes a new TM1637 LED display
  - Sets up communication pins and initial brightness
  - Default LED count is 4 digits

- 🔹 Parameters
  - `clk`: Clock pin (default: P1)
  - `dio`: Data pin (default: P2)
  - `intensity`: Brightness level (0-7)
  - `count`: Number of digits (1-4)

- ✅ Usage example
  ```typescript
  let display = TM1637.create(DigitalPin.P1, DigitalPin.P2, 7, 4)
  ```

### 2. Show Number Block

```typescript
//% blockId="TM1637_shownum" block="%tm|show number %num"
showNumber(num: number)
```

- 🔹 Description
  - Displays a decimal number
  - Handles negative numbers
  - Supports up to 4 digits

- ✅ Usage example
  ```typescript
  display.showNumber(1234) // Shows "1234"
  display.showNumber(-123) // Shows "-123"
  ```

### 3. Show Hex Number Block

```typescript
//% blockId="TM1637_showhex" block="%tm|show hex number %num"
showHex(num: number)
```

- 🔹 Description
  - Displays a hexadecimal number
  - Supports values from 0 to FFFF
  - Shows negative numbers with minus sign

- ✅ Usage example
  ```typescript
  display.showHex(0xABCD) // Shows "ABCD"
  ```

### 4. Show Digit Block

```typescript
//% blockId="TM1637_showbit" block="%tm|show digit %num |at %bit"
showbit(num: number = 5, bit: number = 0)
```

- 🔹 Description
  - Shows a single digit at specified position
  - Position starts from 0 (leftmost)
  - Supports numbers 0-9 and hex digits A-F

- ✅ Usage example
  ```typescript
  display.showbit(5, 0) // Shows "5" at leftmost position
  ```

### 5. Show Decimal Point Block

```typescript
//% blockId="TM1637_showDP" block="%tm|DotPoint at %bit|show %show"
showDP(bit: number = 1, show: boolean = true)
```

- 🔹 Description
  - Shows or hides decimal point at specified position
  - Does not affect the displayed digit

- ✅ Usage example
  ```typescript
  display.showDP(1, true) // Shows decimal point after second digit
  ```

### 6. Set Intensity Block

```typescript
//% blockId="TM1637_set_intensity" block="%tm|set intensity %val"
intensity(val: number = 7)
```

- 🔹 Description
  - Sets the brightness of the display
  - Range: 0 (off) to 8 (brightest)

- ✅ Usage example
  ```typescript
  display.intensity(5) // Sets medium brightness
  ```

### 7. Clear Display Block

```typescript
//% blockId="TM1637_clear" block="clear %tm"
clear()
```

- 🔹 Description
  - Clears all digits on the display
  - Resets internal buffer

- ✅ Usage example
  ```typescript
  display.clear() // Clears the display
  ```

### 8. Display ON/OFF Blocks

```typescript
//% blockId="TM1637_on" block="turn on %tm"
on()

//% blockId="TM1637_off" block="turn off %tm"
off()
```

- 🔹 Description
  - Controls display power state
  - Maintains display memory when off

- ✅ Usage example
  ```typescript
  display.on()  // Turns display on
  display.off() // Turns display off
  ```

---

> Open this page at [https://bplab-dev.github.io/pxt-bplab-seven-segment/](https://bplab-dev.github.io/pxt-bplab-seven-segment/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/bplab-dev/pxt-bplab-seven-segment** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/bplab-dev/pxt-bplab-seven-segment** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
