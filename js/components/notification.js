import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '@ui-kitten/components';

export const Notify = () => (
  <View style={styles.marginTengah}>
    <Image style={styles.notif} source={require('../image/notif.png')} />
    <Text style={styles.text}>No Notifications Yet</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  notif: {
    width: '85%',
    height: 230,
  },
  marginTengah: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
