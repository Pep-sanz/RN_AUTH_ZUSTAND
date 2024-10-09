import React from 'react';
import {View} from 'react-native';
import {useAuthStore} from '../stores/useAuthStore';
import TextCustom from '../components/TextCustom';
import ViewCustom from '../components/ViewCustom';
import ButtonCustom from '../components/ButtonCustom';
import {Gs} from '../styles/globalStyle';

const HomeScreen = () => {
  const {logout} = useAuthStore(state => state);
  return (
    <ViewCustom flex={1} justify="center">
      <View>
        <TextCustom style={{...Gs.title}}>Home Screen</TextCustom>
      </View>
      <View>
        <ButtonCustom title="Logout" onPress={() => logout} />
      </View>
    </ViewCustom>
  );
};

export default HomeScreen;
