// tests go here; this will not be compiled when this package is used as an extension.

// Create test display instance
let display = TM1637.create(DigitalPin.P1, DigitalPin.P2, 7, 4)

// Test Case 1: Basic Initialization
// Purpose: Verify display initialization and basic settings
// Expected: Display should be ON with brightness 7
// Pass criteria: No errors thrown, display visible
basic.forever(function() {
    basic.showString("T1")
    // Test initialization
    display.init()
    basic.pause(1000)

    // Test Case 2: Display Numbers
    // Purpose: Test all digit positions and numbers 0-9
    // Expected: Each number should be clearly visible at correct position
    // Pass criteria: All digits show correct numbers
    basic.showString("T2")
    for (let pos = 0; pos < 4; pos++) {
        for (let num = 0; num < 10; num++) {
            display.showbit(num, pos)
            basic.pause(200)
        }
    }

    // Test Case 3: Show Full Numbers
    // Purpose: Test multi-digit number display
    // Expected: Numbers should be right-aligned and correctly formatted
    // Pass criteria: Numbers display in correct order
    basic.showString("T3")
    let testNumbers = [-999, -1, 0, 1, 999, 1234]
    for (let num of testNumbers) {
        display.showNumber(num)
        basic.pause(1000)
    }

    // Test Case 4: Hexadecimal Display
    // Purpose: Test hexadecimal number display
    // Expected: Hex numbers should display correctly with A-F
    // Pass criteria: Hex values show correct characters
    basic.showString("T4")
    let hexTests = [0x00, 0xFF, 0xA5, 0x5A]
    for (let hex of hexTests) {
        display.showHex(hex)
        basic.pause(1000)
    }

    // Test Case 5: Brightness Control
    // Purpose: Test brightness adjustment
    // Expected: Display should change brightness levels visibly
    // Pass criteria: Visible brightness changes
    basic.showString("T5")
    display.showNumber(8888)
    for (let bright = 1; bright <= 8; bright++) {
        display.intensity(bright)
        basic.pause(500)
    }

    // Test Case 6: Decimal Points
    // Purpose: Test decimal point display
    // Expected: Decimal points should toggle at each position
    // Pass criteria: DPs visible and toggleable
    basic.showString("T6")
    display.showNumber(1234)
    for (let pos = 0; pos < 4; pos++) {
        display.showDP(pos, true)
        basic.pause(500)
        display.showDP(pos, false)
        basic.pause(500)
    }

    // Test Case 7: Display Control
    // Purpose: Test display on/off functionality
    // Expected: Display should turn completely off and on
    // Pass criteria: Display visibly toggles
    basic.showString("T7")
    display.showNumber(8888)
    basic.pause(1000)
    display.off()
    basic.pause(1000)
    display.on()
    basic.pause(1000)

    // Test Case 8: Clear Function
    // Purpose: Test display clearing
    // Expected: All segments should turn off
    // Pass criteria: No segments visible after clear
    basic.showString("T8")
    display.showNumber(8888)
    basic.pause(1000)
    display.clear()
    basic.pause(1000)

    // Test Case 9: Error Handling
    // Purpose: Test boundary conditions and invalid inputs
    // Expected: No crashes or undefined behavior
    // Pass criteria: Program continues running
    basic.showString("T9")
    display.showNumber(-9999) // Out of range negative
    basic.pause(1000)
    display.showNumber(99999) // Out of range positive
    basic.pause(1000)
    display.intensity(10) // Out of range brightness
    basic.pause(1000)
    display.showbit(20, 5) // Out of range position
    basic.pause(1000)
})