/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

const App: () => React$Node = () => {
  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATIO,
  //       {
  //         title: 'Uber App Location Permission',
  //         message:
  //           'Uber App needs access to your location ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the location');
  //     } else {
  //       console.log('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     androidPermission();
  //   } else {
  //     // IOS
  //     Geolocation.getCurrentPosition();
  //   }
  // }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
    </>
  );
};

export default App;
