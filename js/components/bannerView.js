import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Layout, Text, ViewPager} from '@ui-kitten/components';

export const Viewpager = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      style={{paddingVertical: 4}}>
      <Layout level="2" style={styles.tab}>
        <Image
          style={{width: 400, height: 200}}
          source={require('../image/promos2.jpg')}
        />
      </Layout>
      <Layout level="2" style={styles.tab}>
        <Image
          style={{width: 400, height: 200}}
          source={require('../image/promos4.jpg')}
        />
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
