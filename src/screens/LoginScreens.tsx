import React, {useState} from 'react';
import {useAuthStore} from '../stores/useAuthStore';
import {Alert, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import ViewCustom from '../components/ViewCustom';
import TextCustom from '../components/TextCustom';
import {useTheme} from '@rneui/themed';

export const LoginScreen = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {addToken} = useAuthStore(state => state);
  const {theme} = useTheme();
  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('success login');
      console.log(username, password);
      addToken('initoken-success-login-oke!!!');
      Alert.alert('Success', 'Login Success');
    } else {
      console.log('auth failed');
      console.log(username, password);
    }
  };

  console.log(theme.mode);

  return (
    <ViewCustom>
      <View style={{backgroundColor: theme.colors.background}}>
        <TextCustom style={{color: theme.colors.white}}>Login</TextCustom>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={theme.colors.white}
          inputStyle={{color: theme.colors.white}}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          placeholderTextColor={theme.colors.white}
          inputStyle={{color: theme.colors.white}}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Button title="Login" type="solid" onPress={handleSubmit} />
      </View>
    </ViewCustom>
  );
};
