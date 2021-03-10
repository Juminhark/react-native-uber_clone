import React from 'react';
import {View} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />

      {/* Bottom Component*/}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
