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

export const InputLogin = () => {
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
      <Text category="h1" style={{padding: 30}}>
        login
      </Text>

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
      <Button style={{width: 300, marginTop: 20}}>Login</Button>
    </>
  );
};
