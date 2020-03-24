import React from 'react';

import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {InputLogin} from '../components/loginField';

export const HomeScreen = ({navigation}) => (
  <Layout
    style={{
      flex: 1,
      alignItems: 'center',
      padding: 40,
    }}>
    <InputLogin navigation={navigation} />
  </Layout>
);
