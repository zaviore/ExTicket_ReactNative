import React from 'react';
import {TopNav} from '../components/topNavigation';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {View} from 'react-native';
import {InputLogin} from '../components/loginField';
import {ButtonTrain} from '../components/navigationTrain';
import {BottomNav} from '../components/bottomNavigation';

export const Landing = () => (
  <>
    <Layout>
      <TopNav />
    </Layout>

    <ButtonTrain />

    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
      }}>
      <InputLogin />
    </Layout>
    <Layout>
      <BottomNav />
    </Layout>
  </>
);
