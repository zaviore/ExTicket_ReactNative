import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout,
} from '@ui-kitten/components';

const PersonIcon = style => <Icon {...style} name="person-outline" />;
const Myticket = style => <Icon {...style} name="briefcase-outline" />;

const BellIcon = style => <Icon {...style} name="home-outline" />;

const EmailIcon = style => <Icon {...style} name="email-outline" />;

export const BottomNav = () => {
  const [topSelectedIndex, setTopSelectedIndex] = React.useState(0);
  const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

  return (
    <Layout>
      <BottomNavigation
        style={styles.bottomNavigation}
        selectedIndex={bottomSelectedIndex}
        onSelect={setBottomSelectedIndex}>
        <BottomNavigationTab title="Home" icon={BellIcon} />
        <BottomNavigationTab title="My ticket" icon={Myticket} />
        <BottomNavigationTab title="Inbox" icon={EmailIcon} />
        <BottomNavigationTab title="Account" icon={PersonIcon} />
      </BottomNavigation>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
