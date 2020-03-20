import React from 'react';
import {Card, Text, Image, Icon} from '@ui-kitten/components';
import {View} from 'react-native';

export const ButtonTrain = () => (
  <View style={{display: 'flex', flexDirection: 'row'}}>
    <Card style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="car-outline" width={32} height={32} fill="#3366FF" />
        <Text style={{marginTop: 10}}> Click me</Text>
      </View>
    </Card>
    <Card style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="car-outline" width={32} height={32} fill="#3366FF" />
        <Text style={{marginTop: 10}}> Click me</Text>
      </View>
    </Card>
    <Card style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="car-outline" width={32} height={32} fill="#3366FF" />
        <Text style={{marginTop: 10}}> Click me</Text>
      </View>
    </Card>
  </View>
);
