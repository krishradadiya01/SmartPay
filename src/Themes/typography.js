import {moderateScale} from '../Common/constant';

const fontWeights = {
  Regular: {
    fontFamily: 'AROneSans-Regular',
  },
  Medium: {
    fontFamily: 'AROneSans-Medium',
  },
  SemiBold: {
    fontFamily: 'AROneSans-SemiBold',
  },
  Bold: {
    fontFamily: 'AROneSans-Bold',
  },
};

const fontSizes = {
  f18: {
    fontSize: moderateScale(18),
  },
  f20: {
    fontSize: moderateScale(20),
  },
  f24: {
    fontSize: moderateScale(24),
  },
  f32: {
    fontSize: moderateScale(32),
  },
  f40: {
    fontSize: moderateScale(40),
  },
  f46: {
    fontSize: moderateScale(46),
  },
};

const typography = {fontWeights, fontSizes};

export default typography;
