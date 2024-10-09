import {ViewStyle} from 'react-native';
import {colors} from './colors';
import {fontSizes} from './globalStyle';

interface IBtnOutline {
  outlinePrimary: ViewStyle;
  outlineSecondary: ViewStyle;
  outlineError: ViewStyle;
}

const stles = {
  fontSizes: fontSizes.textLg,
  color: colors.textDarkMode,
  borderRadius: 8,
  padding: 16,
};

const buttonSolid = {
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  error: {
    backgroundColor: colors.red,
  },
};

const buttonOutline: IBtnOutline = {
  outlinePrimary: {
    borderColor: colors.primary,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  outlineSecondary: {
    borderColor: colors.secondary,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  outlineError: {
    borderColor: colors.red,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
};

const btnStyles = {
  ...buttonSolid,
  ...buttonOutline,
  link: {
    color: colors.primary,
    fontSize: fontSizes.textLg,
  },
};

export default btnStyles;
