import {useTheme} from '@rneui/themed';
import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import {flexBox} from '../styles/globalStyle';

interface ViewCustomProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewProps['style'];
  flex: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  items?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

const ViewCustom: React.FC<ViewCustomProps> = ({
  children,
  style,
  flex,
  justify,
  items,
  wrap,
  ...rest
}) => {
  const {theme} = useTheme();

  return (
    <View
      {...rest}
      style={[
        styles.defaultStyle,
        {backgroundColor: theme.colors.background},
        style,
        flexBox({
          flex,
          justify,
          items,
          wrap,
        }),
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    padding: 16,
  },
});

export default ViewCustom;
