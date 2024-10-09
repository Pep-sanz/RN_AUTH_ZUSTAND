import {useTheme} from '@rneui/themed';
import React from 'react';
import {Button} from 'react-native-elements';

interface Props {
  title: string;
  onPress: () => void;
  type?: 'solid' | 'outline' | 'clear';
}

export default function ButtonCustom(props: Props) {
  const {title, onPress, type} = props;
  const {theme} = useTheme();
  return (
    <Button
      title={title}
      type={type}
      onPress={onPress}
      buttonStyle={{
        backgroundColor: theme.colors.primary,
      }}
      titleStyle={{color: theme.colors.white}}
    />
  );
}
