function calculateContrast(color1, color2) {
  // Convert colors to RGB format
  const rgbColor1 = isHexColor(color1) ? hexToRgb(color1) : rgbStringToRgb(color1)
  const rgbColor2 = isHexColor(color2) ? hexToRgb(color2) : rgbStringToRgb(color2)
  if (!rgbColor1 || !rgbColor2) {
    return
  }
  // Calculate relative luminance for color 1
  const luminance1 = calculateRelativeLuminance(rgbColor1.r, rgbColor1.g, rgbColor1.b)

  // Calculate relative luminance for color 2
  const luminance2 = calculateRelativeLuminance(rgbColor2.r, rgbColor2.g, rgbColor2.b)
  if (!luminance1 || !luminance2) return
  // Calculate contrast ratio
  const contrast =
    (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05)
  return contrast
}

function calculateRelativeLuminance(red, green, blue) {
  const sRGB = [red / 255, green / 255, blue / 255]
  if (!sRGB) {
    return
  }
  for (let i = 0; i < sRGB.length; i++) {
    //@ts-ignore
    if (sRGB[i] <= 0.03928) {
      //@ts-ignore
      sRGB[i] = sRGB[i] / 12.92
    } else {
      //@ts-ignore
      sRGB[i] = Math.pow((sRGB[i] + 0.055) / 1.055, 2.4)
    }
  }
  //@ts-ignore
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
}

function isHexColor(color) {
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(color)
}

function rgbStringToRgb(rgbString) {
  if (!rgbString) {
    return
  }
  const rgbValues = rgbString.match(/\d+/g)

  if (rgbValues.length !== 3 && rgbValues.length !== 4) {
    debugger
  }

  return {
    r: parseInt(rgbValues[0]),
    g: parseInt(rgbValues[1]),
    b: parseInt(rgbValues[2]),
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        //@ts-ignore
        r: parseInt(result[1], 16),
        //@ts-ignore
        g: parseInt(result[2], 16),
        //@ts-ignore
        b: parseInt(result[3], 16),
      }
    : null
}

const getCursorColor = (event, container, customCursor, originColor) => {
  if (container && customCursor) {
    // Get the underlying element where the cursor is positioned
    const element = document.elementFromPoint(event.clientX, event.clientY)
    if (!element) return
    // Get the background color of the underlying element
    const color = window.getComputedStyle(element).backgroundColor
    const cursorColor = originColor

    // Calculate contrast ratio between the cursor color (red) and the background
    const contrast = calculateContrast(cursorColor, color)
    // Threshold for contrast ratio (you can adjust this based on your preference)
    const minContrastRatio = 9
    // Change the custom cursor color based on contrast ratio
    if (contrast && contrast < minContrastRatio) {
      return "rgb(255, 255, 255)"
    } else {
      return originColor
    }
  }
}
function getRandomIntegerInRange(min, max) {
  // Ensure that min and max are integers
  min = Math.floor(min)
  max = Math.floor(max)

  // Calculate the random integer within the range
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const colorPalette = [
  "rgb(255, 87, 51)", // Coral
  "rgb(112, 162, 136)", // Mint Green
  "rgb(249, 203, 64)", // Mustard Yellow
  "rgb(44, 58, 71)", // Gunmetal
  "rgb(92, 65, 93)", // Mulberry
  "rgb(0, 168, 232)", // Azure
  "rgb(255, 195, 0)", // Vivid Yellow
  "rgb(79, 134, 198)", // Cornflower Blue
  "rgb(228, 113, 113)", // Salmon Pink
  "rgb(104, 166, 145)", // Sage Green
  "rgb(255, 111, 97)", // Coral Red
  "rgb(107, 91, 149)", // Royal Purple
  "rgb(249, 160, 63)", // Orange Yellow
  "rgb(30, 61, 88)", // Dark Slate Blue
  "rgb(181, 172, 73)", // Olive Green
  "rgb(155, 35, 53)", // Crimson Red
  "rgb(109, 152, 186)", // Sky Blue
  "rgb(233, 217, 133)", // Straw Yellow
  "rgb(74, 108, 111)", // Teal
  "rgb(161, 42, 94)", // Dark Raspberry
  "rgb(84, 140, 47)", // Forest Green
  "rgb(255, 140, 66)", // Mango
  "rgb(90, 114, 71)", // Moss Green
  "rgb(255, 180, 78)", // Apricot
  "rgb(0, 110, 109)", // Deep Aqua
  "rgb(255, 84, 96)", // Watermelon
  "rgb(76, 91, 97)", // Pewter
  "rgb(159, 33, 139)", // Fuchsia
  "rgb(91, 117, 83)", // Olive Drab
  "rgb(255, 207, 72)", // Goldenrod
  "rgb(0, 112, 125)", // Tropical Blue
  "rgb(232, 110, 63)", // Burnt Sienna
  "rgb(154, 160, 127)", // Laurel Green
  "rgb(255, 59, 73)", // Vivid Red
  "rgb(84, 106, 123)", // Slate Gray
  "rgb(217, 78, 103)", // Blush
  "rgb(115, 135, 123)", // Green Gray
  "rgb(255, 148, 114)", // Melon
  "rgb(59, 63, 74)", // Charcoal
  "rgb(161, 40, 48)", // Rust Red
  "rgb(53, 114, 102)", // Jade Green
  "rgb(255, 120, 81)", // Coral Pink
  "rgb(174, 198, 207)", // Light Blue
  "rgb(195, 68, 122)", // Mulberry Red
  "rgb(73, 121, 107)", // Sea Green
  "rgb(255, 107, 107)", // Pastel Red
  "rgb(117, 177, 169)", // Blue Green
  "rgb(209, 17, 73)", // Tomato Red
  "rgb(123, 162, 63)", // Asparagus Green
]
export { getCursorColor, colorPalette, getRandomIntegerInRange }
