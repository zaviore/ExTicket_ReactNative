import React from 'react';
import {Text, Card} from '@ui-kitten/components';
import {Image, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const Mybookscontents = () => (
  <>
    <View style={styles.marginTengah}>
      <Image
        style={{width: 130, height: 130}}
        source={require('../image/noticket.png')}
      />

      <Text style={styles.texttebal}>No Active E-tickets and Vouchers</Text>
      <Text style={styles.textkecil}>
        find inspiration for your next adventure bellow!
      </Text>
    </View>
    <Card style={{margin: 20, borderRadius: 5}}>
      <Text style={styles.texttebal2}>Explore Popular destinations</Text>
      <Text style={styles.textkecil}>see place loved by Exticket users !</Text>
      <ScrollView
        horizontal
        style={{flexDirection: 'row'}}
        showsHorizontalScrollIndicator={false}>
        <View>
          <Image style={styles.imgCity} source={require('../image/bali.jpg')} />
          <Text style={styles.titleCity}>Bali</Text>
        </View>
        <View>
          <Image
            style={styles.imgCity}
            source={require('../image/jakarta.jpg')}
          />
          <Text style={styles.titleCity}>Jakarta</Text>
        </View>
        <View>
          <Image
            style={styles.imgCity}
            source={require('../image/malaysia.jpg')}
          />
          <Text style={styles.titleCity}>Malaysia</Text>
        </View>
      </ScrollView>
      <View style={{marginTop: 30}}>
        <Text style={styles.texttebal2}>Eats Offers in Your City</Text>
        <Text style={styles.textkecil}>
          Get todays loved by ExTicket deals !
        </Text>
        <ScrollView
          horizontal
          style={{flexDirection: 'row'}}
          showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              style={styles.imgFood}
              source={{
                uri:
                  'https://merahputih.com/media/51/02/64/51026485e1dd6fd8a1a800d4d2ed6373.png',
              }}
            />
            <Text style={styles.titleFood}>madura</Text>
            <Text style={styles.discount}>Save 30%</Text>
            <Text style={styles.tittleProduct}>
              Sate madura - Bintaro city square
            </Text>
            <Text style={styles.textkecil}>Rp. 100.000</Text>
          </View>
          <View>
            <Image
              style={styles.imgFood}
              source={{
                uri:
                  'https://cdn.idntimes.com/content-images/community/2018/01/soto-betawi-a11ff8223786207cd94e7edaca236201_600x400.jpg',
              }}
            />
            <Text style={styles.titleFood}>Betawi</Text>
            <Text style={styles.discount}>Save 15%</Text>
            <Text style={styles.tittleProduct}>
              Soto betawi - Arengka senayan
            </Text>
            <Text style={styles.textkecil}>Rp. 60.000</Text>
          </View>
          <View>
            <Image
              style={styles.imgFood}
              source={{
                uri:
                  'https://storage.googleapis.com/finansialku_media/wordpress_media/2019/03/Kuliner-Khas-Indonesia-02-Rendang-Finansialku.jpg',
              }}
            />
            <Text style={styles.titleFood}>padang</Text>
            <Text style={styles.discount}>Save 10%</Text>
            <Text style={styles.tittleProduct}>
              rendang batokok - Bintaro permai indah
            </Text>
            <Text style={styles.textkecil}>Rp. 35.000</Text>
          </View>
        </ScrollView>
      </View>
    </Card>
  </>
);

const styles = StyleSheet.create({
  titleCity: {
    color: 'white',
    position: 'absolute',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
  discount: {
    color: 'white',
    backgroundColor: 'orange',
    width: 100,
    position: 'absolute',
    marginTop: 130,
    marginLeft: 65,
    textAlign: 'right',
    padding: 3,
    fontWeight: 'bold',
  },
  titleFood: {
    color: 'white',
    backgroundColor: 'gray',
    position: 'absolute',
    fontSize: 10,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  tittleProduct: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 155,
  },
  imgCity: {
    width: 160,
    height: 200,
    borderRadius: 7,
    margin: 5,
  },
  imgFood: {
    width: 160,
    height: 160,
    borderRadius: 7,
    margin: 5,
  },
  textkecil: {
    fontSize: 12,
    color: 'grey',
  },
  texttebal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  texttebal2: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  marginTengah: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
