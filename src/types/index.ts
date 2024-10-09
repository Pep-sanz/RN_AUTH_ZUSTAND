import {TextStyle, ViewStyle} from 'react-native';

export interface ITheme {
  colors: {
    background: string;
    text: string;
    white: string;
    black: string;
    primary: string;
    secondary: string;
    gray: string;
    lightGray: string;
    darkGray: string;
    red: string;
    blue: string;
  };
  textStyles: {
    heading: TextStyle;
    body: TextStyle;
  };
  viewStyles: {
    container: ViewStyle;
    card: ViewStyle;
  };
  buttonStyles: {
    primary: ViewStyle;
    secondary: ViewStyle;
    error: ViewStyle;
    outlinePrimary: any;
    outlineSecondary: any;
    outlineError: any;
    link: any;
  };
  container: ViewStyle;
}
