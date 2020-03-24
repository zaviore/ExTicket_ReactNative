import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Card} from '@ui-kitten/components';
import {ScrollView, Image} from 'react-native';

export const OngoingPromo = () => (
  <>
    <Layout style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ongoing promos</Text>
      <Text style={{fontSize: 14, margin: 4, color: '#919191'}}>
        always save travels from any potential
      </Text>

      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../image/promo.png')}
          />
        </Card>

        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 300, height: 150}}
            source={require('../image/promos2.jpg')}
          />
        </Card>

        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 300, height: 150}}
            source={require('../image/promos2.jpg')}
          />
        </Card>
      </ScrollView>
    </Layout>
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textGray: {margin: 5, width: 300, color: '#919191'},
});
