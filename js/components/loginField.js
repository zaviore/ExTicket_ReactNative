// import React, {Component} from 'react';
// import {Input} from '@ui-kitten/components';

// class User extends Component {
//   render() {
//     const [value, setValue] = React.useState('');
//     return (
//       <Input
//         placeholder="Place your Text"
//         value={value}
//         onChangeText={setValue}
//       />
//     );
//   }
// }
// export default User;

import React from 'react';
import {Input, Text, Icon, Button} from '@ui-kitten/components';
import {View} from 'react-native';

const Facebook = style => <Icon {...style} name="facebook-outline" />;

const Googlee = style => <Icon {...style} name="google-outline" />;

export const InputLogin = ({navigation}) => {
  const [valueuser, setUser] = React.useState('');
  const [valuepass, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = style => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />
  );
  return (
    <>
      <Input
        placeholder="Place your Text"
        value={valueuser}
        onChangeText={setUser}
      />
      <Input
        value={valuepass}
        placeholder="********"
        icon={renderIcon}
        secureTextEntry={secureTextEntry}
        onIconPress={onIconPress}
        onChangeText={setPassword}
      />

      <Text category="">don't have account? Sign up</Text>
      <Button
        style={{width: 300, marginTop: 20}}
        status="warning"
        onPress={() => navigation.navigate('Landing')}>
        Login
      </Button>

      <Text style={{marginTop: 100, color: 'grey'}}>
        ──────── Or Log in With ────────
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button
          style={{
            width: 300,
            marginTop: 20,
            flex: 1,
            margin: 10,
            backgroundColor: '#4267b2',
          }}
          status=""
          onPress={() => navigation.navigate('Landing')}
          icon={Facebook}>
          Facebook
        </Button>
        <Button
          style={{
            width: 300,
            marginTop: 20,
            flex: 1,
            margin: 10,
            backgroundColor: '#176BEF',
          }}
          onPress={() => navigation.navigate('Landing')}
          icon={Googlee}>
          Google
        </Button>
      </View>
    </>
  );
};
