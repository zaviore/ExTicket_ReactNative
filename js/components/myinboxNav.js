import React from 'react';
import {
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Input,
} from '@ui-kitten/components';

import {View} from 'react-native';
// const BackIcon = style => <Icon {...style} name="arrow-back" />;

const EditIcon = style => <Icon {...style} name="edit" />;

const MenuIcon = style => <Icon {...style} fill="white" name="more-vertical" />;

// const BackAction = props => <TopNavigationAction {...props} icon={BackIcon} />;

const EditAction = props => <TopNavigationAction {...props} icon={EditIcon} />;

const MenuAction = props => <TopNavigationAction {...props} icon={MenuIcon} />;

export const MyInboxNav = () => {
  const [valueSearch, setSearch] = React.useState(null);
  const onBackPress = () => {};

  //   const renderLeftControl = () => <BackAction onPress={onBackPress} />;

  const renderLeftControls = () => [<Search />];

  const renderRightControls = () => [<MenuAction />];
  const Search = props => (
    <>
      <View style={{justifyContent: 'center', padding: 10}}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          My inbox
        </Text>
      </View>
    </>
  );
  return (
    <>
      <TopNavigation
        style={{backgroundColor: '#1A9FE2'}}
        leftControl={renderLeftControls()}
        rightControls={renderRightControls()}
      />
    </>
  );
};
