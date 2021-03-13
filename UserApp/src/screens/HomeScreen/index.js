import React from 'react';
import {ScrollView, View, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <ScrollView>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      {/* Covid Message */}
      <CovidMessage />

      {/* Bottom Component*/}
      <HomeSearch />
    </ScrollView>
  );
};

export default HomeScreen;
