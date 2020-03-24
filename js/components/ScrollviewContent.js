import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Card} from '@ui-kitten/components';
import {ScrollView, Image} from 'react-native';

export const ContentScroll = () => (
  <>
    <Layout style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        The Lastest from Exticket
      </Text>
      <Text style={{fontSize: 14, margin: 4, color: '#919191'}}>
        Stay Informed of the latest feature updates
      </Text>

      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 300, height: 150}}
            source={require('../image/shikansen.jpg')}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>
            Enjoy Hatsune Miku Train
          </Text>
          <Text style={styles.textGray}>
            Get Exticket Mandiri Card and Enjoy more shopping Rewards
          </Text>
        </Card>

        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 300, height: 150}}
            source={require('../image/promos2.jpg')}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>
            Enjoy More Rewards
          </Text>
          <Text style={styles.textGray}>
            Get Exticket Mandiri Card and Enjoy more shopping Rewards
          </Text>
        </Card>

        <Card appearance="filled" style={{margin: -12}}>
          <Image
            style={{width: 300, height: 150}}
            source={require('../image/promos2.jpg')}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>
            Enjoy More Rewards
          </Text>
          <Text style={styles.textGray}>
            Get Exticket Mandiri Card and Enjoy more shopping Rewards
          </Text>
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
