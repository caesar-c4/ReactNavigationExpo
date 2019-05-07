

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import {
  createStackNavigator,
  createNavigationContainer,
} from 'react-navigation';


/*
 * Every Screen has this.props.navigation and supports customization with `static navigationOptions = {}`
 */
class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  onPress = () => {
    this.props.navigation.push('HomeScreen');
    /* this.props.navigation.navigate('HomeScreen'); */
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.onPress}>
          LOGIN
        </Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  onPressBack = () => {
    this.props.navigation.pop();
    // this.props.navigation.goBack();
  };

  onPressProfile = () => {
    // Send Data
    this.props.navigation.push('ProfileScreen', { height: "6'2", name: "Charlie Cheever" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.onPressBack}>
          Pretend this is a dope app Home Screen
        </Text>

        <Text style={styles.paragraph} onPress={this.onPressProfile}>
          Go to profile
        </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  onPress = () => {
    // Go back to login
    this.props.navigation.popToTop();
  };

  render() {
    const height = this.props.navigation.getParam('height');
    /* Old: this.props.navigation.state.params.height */
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Details about me that distracts you from discovering how short I am. (
          {height})
        </Text>

        <Text style={styles.paragraph} onPress={this.onPress}>
          Sign Out
        </Text>
      </View>
    );
  }
}

/*

let stack = [];

stack.push(screenA);

// [screenA]

stack.push(screenB);

// [screenA, screenB]

stack.pop();

// [screenA]

*/

/*
 * Provides a way for your app to transition between screens 
 * where each new screen is placed on top of a stack.
 */
/* Old: = StackNavigator() */
const MainStackNavigator = createStackNavigator(
  {
    LoginScreen,
    // Alternate Variations
    HomeScreen: HomeScreen,
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile for ' + navigation.getParam('name'),
      }),
    },
  },
  {
    // initialRouteName: 'HomeScreen',
    // mode: 'modal',
    // headerMode: 'float', // screen on android
    // headerBackTitleVisible: false,
    // headerTransitionPreset: 'fade-in-place',
    // headerLayoutPreset: 'left',
    // cardStyle: {
    //   backgroundColor: 'orange',
    // },
  }
);

// Link the back button on Android and manage the environment.

const NavigationApp = createNavigationContainer(MainStackNavigator);

// Export the App

export default NavigationApp;


/* CRAZY V3 PRO TIP: Native Navigation Containers */
import { useScreens } from 'react-native-screens';
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
