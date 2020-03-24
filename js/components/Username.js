import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Avatar, Text, Button} from '@ui-kitten/components';

export const Username = () => (
  <>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar style={styles.avatar} source={require('../image/tanahlot.jpg')} />
      <Text style={{flex: 1, marginTop: 25, fontWeight: 'bold'}}>Zamhadi</Text>
    </View>
    <View style={{flexDirection: 'row', marginTop: -10}}>
      <Button size="tiny" style={styles.buttonPoint} status="control">
        <Image
          style={{width: 15, height: 15}}
          source={require('../image/coin.png')}
        />{' '}
        {'  '}
        28 point
      </Button>
      <Button size="tiny" style={styles.buttonPoint} status="control">
        <Image
          style={{width: 13, height: 13}}
          source={require('../image/wallet.png')}
        />
        {'  '}
        Wallet
      </Button>
      <Button size="tiny" style={styles.buttonPoint} status="control">
        <Image
          style={{width: 14, height: 14}}
          source={require('../image/pay.png')}
        />
        {'  '}
        PayLater
      </Button>

      <View style={{marginLeft: 40, marginTop: -40}}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../image/barcode.png')}
        />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  avatar: {
    margin: 16,
    flex: 0,
  },
  buttonPoint: {
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
});
