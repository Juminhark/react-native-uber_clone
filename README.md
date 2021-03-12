# uber_clone

## reference

- [Vadim Savin - Build the Uber clone in React Native (Tutorial for Beginners)](https://www.youtube.com/watch?v=sIRcN0MeZVU)
- [Vadim Savin - Build the Uber clone in React Native (Tutorial for Beginners) [2]](https://www.youtube.com/watch?v=_U4zgWcw2Ws)
- [Adding Users to DynamoDB using a Cognito Post-confirmation Lambda Trigger & Exposing a GraphQL API](https://www.youtube.com/watch?v=Sk9HMuAaTmQ)

## UberUserApp

### dependencies

- [React-Native-CLI](https://reactnative.dev/docs/environment-setup)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

### init

- Chocolatey : openjdk8
- 환경변수 : JAVA_HOME, ANDROID_HOME, path 등록.

```sh
> npx react-native init UserApp

> cd UserApp
> yarn start

// New Terminal
> yarn android
```

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```
> yarn add react-native-vector-icons
```

```js
// android : add to the android/app/build.gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

```js
// Icon Component
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;
```

### Home Screen

- Dummy Map component
- Message Box
- Where to? Component

### Search Page

- Location input boxes
- Default locations (Home, Work)
- Location row

### [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)

- install library

-

```sh
> yarn add react-native-google-places-autocomplete
```

- [enable google APIs : Places API](https://console.developers.google.com/apis/dashboard?project=map-api-296313&hl=ko&pli=1)
- make sure billing is enabled
- get api key

### Search Result

- Dummy Map view
- List of User cars
- Confirm Uber ride

### [react-native-maps](https://github.com/react-native-maps/react-native-maps)

- [installation](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)

```sh
> yarn add react-native-maps -E
```

- "react-native": "0.63.4", Build configuration on Android

```js
// android/build.gradle
...
buildscript {
    ext {
        ...
        playServicesVersion = "17.0.0" // or find latest version
        androidMapsUtilsVersion = "2.2.0"
    }
}
...

// android/app/src/main/AndroidManifest.xml
<application>

  ...

  <!-- # You will only need to add this meta-data tag, but make sure it's a child of application -->
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="Your Google maps API Key Here"/>

  <!-- # You will also only need to add this uses-library tag -->
  <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

- test

```js
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

<MapView
	style={{ width: '100%', height: '100%' }}
	provider={rPROVIDER_GOOGLE}
	initialRegion={{
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}}
/>;
```

### Maps Directions

- [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

```sh
> yarn add react-native-maps-directions
```

- GoogleAPIs : Directions API

```js
// RouteMap
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDR2YUfnM9t9YIqMuLtCe-8iSG2hul3kJU';

const RouteMap = (props) => {
	const origin = {
		latitude: 28.450627,
		longitude: -16.269745,
	};

	const destination = {
		latitude: 28.451537,
		longitude: -16.261045,
	};

	return (
		<MapView
			style={{ width: '100%', height: '100%' }}
			provider={PROVIDER_GOOGLE}
			showsUserLocation={true}
			initialRegion={{
				latitude: 28.450627,
				longitude: -16.263045,
				latitudeDelta: 0.0222,
				longitudeDelta: 0.0121,
			}}
		>
			<MapViewDirections
				origin={origin}
				destination={destination}
				apikey={GOOGLE_MAPS_APIKEY}
				strokeWidth={5}
				strokeColor="black"
			/>
			<Marker coordinate={origin} title={'Origin'} />
			<Marker coordinate={destination} title={'Destination'} />
		</MapView>
	);
};

export default RouteMap;
```

### Maps: Marker direction

- Rotate the cars in the direction of their movement
  - make sure all images (assets) are facing up

```js
// car
export default [
	{
		id: '0',
		type: 'UberX',
		latitude: 28.450627,
		longitude: -16.263045,
		heading: 130,
	},
	{
		id: '1',
		type: 'Comfort',
		latitude: 28.456312,
		longitude: -16.252929,
		heading: 0,
	},
	{
		id: '2',
		type: 'UberXL',
		latitude: 28.456208,
		longitude: -16.259098,
		heading: 250,
	},
	{
		id: '3',
		type: 'Comfort',
		latitude: 28.454812,
		longitude: -16.258658,
		heading: 30,
	},
];

// HomeMap
{
	cars.map((car) => (
		<Marker
			key={car.id}
			coordinate={{ latitude: car.latitude, longitude: car.longitude }}
		>
			<Image
				style={{
					width: 70,
					height: 70,
					resizeMode: 'contain',
					transform: [
						{
							rotate: `${car.heading}deg`,
						},
					],
				}}
				source={getImage(car.type)}
			/>
		</Marker>
	));
}
```

### Places Autocomplete styles

### Places Autocomplete Current Location

- [react-native-geolocation/react-native-geolocation](https://github.com/react-native-geolocation/react-native-geolocation)

  - install geolocation

  ```
  > yarn add @react-native-community/geolocation
  ```

  ```js
  // android/app/src/main/AndroidManifest.xml
  <!-- To request access to location, you need to add the following line to your app -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  ```

- request permission to use location

```js
// App.js
import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App Location Permission',
          message:
            'Uber App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);
```

- use the location in places autocomplete component
- add predefined location (HOME, WORK)?

### [React Navigation](https://reactnavigation.org/docs/getting-started)

- Install React-Navigation library and follow the installation guide

```
> yarn add @react-navigation/native

> yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

```

```js
// App.js
import 'react-native-gesture-handler';

import Router from './src/navigation/Root';

const App: () => React$Node = () => {
	return (
		<>
			<Router />
		</>
	);
};

export default App;
```

```js
// Root.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

const RootNavigator = (props) => {
	return (
		<NavigationContainer>
			<HomeScreen />
		</NavigationContainer>
	);
};

export default RootNavigator;
```

- Defined all the screens in a Stack Navigator

```
> yarn add @react-navigation/stack
```

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const RootNavigator = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={'Home'} component={HomeScreen} />
				<Stack.Screen
					name={'DestinationSearch'}
					component={DestinationSearch}
				/>
				<Stack.Screen name={'SearchResults'} component={SearchResults} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
```

- Implement the Navigation between screens

```js

// HomeSearch
import {useNavigation} from '@react-navigation/native';

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const goToSearch = () => {
    // stack screen간 이동.
    navigation.navigate('DestinationSearch');
  };

  return (
    <View>
      {/*  Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
      </Pressable>
  )
}
```

- Send data between screens

```js
// 보내는쪽
const checkNavigation = () => {
	//! 출발지 && 목적지가 설정되면 result로 이동
	if (originPlace && destinationPlace) {
		navigation.navigate('SearchResults', {
			originPlace,
			destinationPlace,
		});
	}
};

useEffect(() => {
	checkNavigation();
}, [originPlace, destinationPlace]);
```

```js
// 받는쪽
import { useRoute } from '@react-navigation/native';

const SearchResults = (props) => {
	const route = useRoute();

	console.log(route.params);
};
```

### [Drawer Navigation(Hamburger Menu)](https://reactnavigation.org/docs/drawer-based-navigation/)

- install Drawer Navigation package

```
> yarn add @react-navigation/drawer
```

- Setup Basic Drawer Navigation
- Customize the Drawer Navigation

### [Setup AWS Amplify Project](https://docs.amplify.aws/start/q/integration/react-native?sc_icampaign=react-native-start&sc_ichannel=choose-integration)

- [전제조건을 만족하고 진행](https://www.youtube.com/watch?v=fWbM5DLh25U&feature=emb_title)

```

> amplify configure
> // region : ap-northeast-2(서울)
> // user name : amplify-user
> // accessKeyId
> // secretAccessKey
> // Profile Name

> amplify init

> Choose your default editor : None
> Choose the type of app that you`re building : javascript
> What javascript framework are tou using : react-native
> Source Directory Paths : /

> yarn add aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo

```

- Configure the App.js

```js
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
```

### Authentication

- [Adding Users to DynamoDB using a Cognito Post-confirmation Lambda Trigger & Exposing a GraphQL API](https://www.youtube.com/watch?v=Sk9HMuAaTmQ)
  <img src="./assets/1.png" width="100%" height="100%" alt="typescript-logo"></img>
  <img src="./assets/2.png" width="100%" height="100%" alt="typescript-logo"></img>

- Setup Authentication

```
> amplify add auth
```

- Manual configuration
- Setup Lambda Triggers: Post confirmation
- create own module
- configure App.js

### GraphQL API

- init

```
> amplify add api
```

- 1.  Write User Model

```js
// amplify / backend / api / uber / schema.graphql
type User @model {
  id: ID!
  username: String!
  email: String!
}
```

- 2.  Push everything to the cloud (amplify push)

```
> amplify push

> amplify console
> Which site do you want to open? · Console
```

### Finish set-up of Lambda Function

- set the user table name as env variable
- give access to lambda to access the dynamoDB
- test it out

### try

- where from? : current location
- where to? : 1750 lundy avenue, san jose, ca

## UberDriver

### init

```sh
> npx react-native init DriverApp

> cd DriverApp

> yarn start

// another terminal
> yarn android
```

## Error

- 1. jdk 설치 문제

  - oracle || openjdk
  - 기존 설치된 oracle은 jre만 있음
  - Chocolatey : openjdk8 설치로 해결

- 2.  [module naming collision](https://github.com/aws-amplify/amplify-cli/issues/3295)

```sh
jest-haste-map: Haste module naming collision: uber9440930194409301PostConfirmation
  The following files share their name; please adjust your hasteImpl:
    * <rootDir>\amplify\#current-cloud-backend\function\uber9440930194409301PostConfirmation\src\package.json
    * <rootDir>\amplify\backend\function\uber9440930194409301PostConfirmation\src\package.json

Failed to construct transformer:  DuplicateError: Duplicated files or mocks. Please check the console for more info
    at setModule (C:\DEV\uber_clone\Uber\node_modules\metro\node_modules\jest-haste-map\build\index.js:620:17)
    at workerReply (C:\DEV\uber_clone\Uber\node_modules\metro\node_modules\jest-haste-map\build\index.js:691:9)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Promise.all (index 39) {
  mockPath1: 'amplify\\#current-cloud-backend\\function\\uber9440930194409301PostConfirmation\\src\\package.json',
  mockPath2: 'amplify\\backend\\function\\uber9440930194409301PostConfirmation\\src\\package.json'
}
```

```js
// metro.config.js
module.exports = {
	resolver: {
		blacklistRE: /#current-cloud-backend\/.*/,
	},
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
};
```

- 3. [Importing createDrawerNavigator throws 'NativeReanimated' error.](https://www.gitmemory.com/issue/software-mansion/react-native-reanimated/1798/792790745)

```
ERROR  Invariant Violation: TurboModuleRegistry.getEnforcing(...): 'NativeReanimated' could not be found. Verify that a module by this name
is registered in the native binary.

 ERROR  Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication)
```

```js
// 2.0.0으로 버전업에서 나타나는 현상으로 보임
"react-native-reanimated": "^2.0.0"
```

```sh
// 1.3.2 버젼으로 재설치
> yarn remove react-native-reanimated

> yarn add react-native-reanimated@1.3.2
```
