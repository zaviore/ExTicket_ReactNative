import React from 'react';
import {Card, Text, Icon, Layout} from '@ui-kitten/components';
import {View, Image} from 'react-native';

export const ButtonTrain = () => (
  <>
    <Layout>
      <View style={{margin: 20}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../image/train2.png')}
              />
              <Text style={{marginTop: 7, fontSize: 12}}>Train</Text>
            </View>
          </Card>

          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 47, height: 47}}
                source={require('../image/hotel.png')}
              />
              <Text style={{marginTop: 7, fontSize: 12}}>Hotel</Text>
            </View>
          </Card>

          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 47, height: 47}}
                source={require('../image/fly.png')}
              />
              <Text style={{marginTop: 7, fontSize: 12}}>Airplane</Text>
            </View>
          </Card>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../image/train2.png')}
              />
              <Text style={{marginTop: 7, fontSize: 12}}>Train</Text>
            </View>
          </Card>

          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../image/train.png')}
              />
              <Text style={{marginTop: 10, fontSize: 12}}>Ex</Text>
            </View>
          </Card>

          <Card style={{flex: 1, margin: 8, elevation: 2}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../image/train2.png')}
              />
              <Text style={{marginTop: 7, fontSize: 12}}>Ex</Text>
            </View>
          </Card>
        </View>
      </View>
    </Layout>
  </>
);
