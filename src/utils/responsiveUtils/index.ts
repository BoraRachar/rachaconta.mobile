import { Dimensions } from 'react-native'

const baseDevice = {
  width: 375,
  height: 812,
}

const { width, height } = Dimensions.get('window')

const horizontalScale = (size: number) => (width / baseDevice.width) * size
const verticalScale = (size: number) => (height / baseDevice.height) * size
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor

// Converts provided font size to rem units.
const rem = (size = 0) => {
  let multiplier = 1
  if (Math.max(height, width) < baseDevice.height) {
    multiplier = 0.9
  }

  const elementSize = typeof size === 'number' ? size : parseFloat(size)
  return Math.floor((width / baseDevice.width) * elementSize * multiplier)
}

export { horizontalScale, verticalScale, moderateScale, rem }
