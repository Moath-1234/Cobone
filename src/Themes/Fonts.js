import {Dimensions, PixelRatio, Platform} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
export default {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  simiBold: 'Montserrat-SemiBold',
  xxsm: normalize(10),
  xsm: normalize(12),
  sm: normalize(14),
  md: normalize(16),
  lg: normalize(18),
  l: normalize(20),
  xl: normalize(22),
  xxl: normalize(24),
  xxxl: normalize(28),
};
