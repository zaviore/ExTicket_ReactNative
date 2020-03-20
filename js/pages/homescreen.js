import React from 'react';

import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {InputLogin} from '../components/loginField';

export const HomeScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    }}>
    <InputLogin />
  </Layout>
);
