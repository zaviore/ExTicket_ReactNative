import React from 'react';
import {SafeAreaView} from 'react-native';
import {TopNav} from '../components/topNavigation';

import {View, Image} from 'react-native';
import {Viewpager} from '../components/bannerView';
import {ButtonTrain} from '../components/navigationTrain';
import {NavigationContainer} from '@react-navigation/native';
import {Mybookscontents} from './Myticketcontent';
import {ContentScroll} from '../components/ScrollviewContent';
import {Username} from '../components/Username';
import {Mybooknav} from './MyTicketNav';
import {OngoingPromo} from './ongoingPromo';
import {Notify} from './notification';
import {MyInboxNav} from './myinboxNav';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Icon,
  Text,
} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';

const AccountIcon = style => <Icon {...style} name="home-outline" />;
const MyticketIcon = style => <Icon {...style} name="briefcase-outline" />;
const EmailIcon = style => <Icon {...style} name="email-outline" />;
const PersonIcon = style => <Icon {...style} name="person-outline" />;

const BottomTab = createBottomTabNavigator();

const Homes = () => (
  <>
    <TopNav />
    <ScrollView>
      <Viewpager />
      <Username />
      <ButtonTrain />
      <ContentScroll />
      <OngoingPromo />
    </ScrollView>
  </>
);

const Myticket = () => (
  <>
    <Mybooknav />
    <ScrollView>
      <Mybookscontents />
    </ScrollView>
  </>
);

const Inboxs = () => (
  <>
    <MyInboxNav />
    <Notify />
  </>
);

const Accounts = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Account</Text>
  </Layout>
);

const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="Home" icon={AccountIcon} />
        <BottomNavigationTab title="Myticket" icon={MyticketIcon} />
        <BottomNavigationTab title="Inbox" icon={EmailIcon} />
        <BottomNavigationTab title="Account" icon={PersonIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={Homes} />
    <BottomTab.Screen name="Myticket" component={Myticket} />
    <BottomTab.Screen name="Inbox" component={Inboxs} />
    <BottomTab.Screen name="Account" component={Accounts} />
  </BottomTab.Navigator>
);

export const BottomNav = () => <TabNavigator />;
