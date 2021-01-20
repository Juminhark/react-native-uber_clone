# uber_clone

- [React-Native-CLI](https://reactnative.dev/docs/environment-setup)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- [react-native-maps-directions]()

## init

- Chocolatey : openjdk8
- 환경변수 : JAVA_HOME, ANDROID_HOME, path 등록.

```sh
> npx react-native init Uber

> cd Uber
> yarn start

// New Terminal
> yarn android
```

## Error

- 1. jdk 설치 문제
  - oracle || openjdk
  - 기존 설치된 oracle은 jre만 있음
  - Chocolatey : openjdk8 설치로 해결

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```sh
> yarn add react-native-vector-icons

// android : add to the android/app/build.gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

### [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)

```sh
> yarn add react-native-google-places-autocomplete
```

- google APIs : Places API

### [react-native-maps](https://github.com/react-native-maps/react-native-maps)

- [installation](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)

```sh
> yarn add react-native-maps -E
```

- "react-native": "0.63.4", Build configuration on Android

```sh
//! android/build.gradle
...
buildscript {
    ext {
        ...
        playServicesVersion = "17.0.0" // or find latest version
        androidMapsUtilsVersion = "2.2.0"
    }
}
...


//! android/app/src/main/AndroidManifest.xml
<application>
    //# You will only need to add this meta-data tag, but make sure it's a child of application
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

    //# You will also only need to add this uses-library tag
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

### [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

```sh
> yarn add react-native-maps-directions
```

- GoogleAPIs : Directions API
