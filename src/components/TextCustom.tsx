// src/components/TextCustom.tsx
import {useTheme} from '@rneui/themed';
import React from 'react';
import {Text, TextProps} from 'react-native';

interface TextCustomProps extends TextProps {
  children: React.ReactNode;
  style?: object; // Memungkinkan untuk menerima style tambahan
}

const TextCustom: React.FC<TextCustomProps> = ({children, style, ...rest}) => {
  const {theme} = useTheme();
  return (
    <Text
      style={[
        style,
        {
          color: theme.colors.white,
        },
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default TextCustom;
