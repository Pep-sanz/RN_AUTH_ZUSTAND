import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {CreateThemeOptions} from '@rneui/themed/dist/config/ThemeProvider';

export interface IFlexBox {
  flex: number;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  items?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const fontSizes = StyleSheet.create({
  textXs: {
    fontSize: 12,
    lineHeight: 16,
  },
  textBase: {
    fontSize: 16,
    lineHeight: 24,
  },
  textLg: {
    fontSize: 18,
    lineHeight: 28,
  },
  textXl: {
    fontSize: 20,
    lineHeight: 32,
  },
  text3xl: {
    fontSize: 30,
    lineHeight: 42,
  },
  text5xl: {
    fontSize: 48,
    lineHeight: 60,
  },
});

export const flexBox = (args: IFlexBox) => {
  const {flex, justify, items, wrap} = args;
  return {
    flex: flex,
    justifyContent: justify,
    alignItems: items,
    flexWrap: wrap,
  };
};

export const themeMode: CreateThemeOptions = {
  lightColors: {
    ...colors,
    background: colors.backgroundLight,
    white: colors.textLightMode,
  },
  darkColors: {
    ...colors,
    background: colors.backgroundDark,
    white: colors.textDarkMode,
  },
  spacing: {
    lg: 16,
    md: 8,
    sm: 4,
    xs: 2,
  },
};

export const Gs = StyleSheet.create({
  title: {
    ...fontSizes.text5xl,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
