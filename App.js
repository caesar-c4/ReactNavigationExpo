// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends React.Component
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to details again"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component
// {
//   render()
//   {
//     return <AppContainer />;
//   }
// }



// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends React.Component
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component
// {
//   render()
//   {
//     return <AppContainer />;
//   }
// }


// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends React.Component
// {
//   static navigationOptions =
//     {
//       title: 'Home',
//       headerStyle:
//       {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }
//   render()
//   {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() =>
//           {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here sonny',
//             });
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component
// {
//   static navigationOptions = ({ navigation }) =>
//   {
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//     };
//   };
//   render()
//   {
//     /* 2. Get the param, provide a fallback value if not available */
//     const { navigation } = this.props;
//     const itemId = navigation.getParam('itemId', 'NO-ID');
//     const otherParam = navigation.getParam('otherParam', 'some default value');

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             this.props.navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })}
//         />
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({ otherParam: 'Updated!' })}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component
// {
//   render()
//   {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen,
// });

// const RootStack = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );


// // const RootStack = createStackNavigator(
// //   {
// //     Home: HomeScreen,
// //     Details: DetailsScreen,
// //   },
// //   {
// //     initialRouteName: 'Home',
// //   }
// // );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component
// {
//   render()
//   {
//     return <AppContainer />;
//   }
// }

// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//       </View>
//     );
//   }
// }

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Settings: { screen: SettingsScreen },
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     animationEnabled: false,
//     swipeEnabled: false,
//   }
// ));

import React from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component
{
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        {/* <tabs></tabs> */}
      </View>

    );
  }
}

class SettingsScreen extends React.Component
{
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component
{
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

// const tabs = createMaterialTopTabNavigator =
//   (
//     {
//       HomeScreen:
//       {
//         screen: HomeScreen,
//         navigationOptions: {
//           tabBarIcon: ({ focused, tintColor }) =>
//             (
//               <Icon name='ios-home' size={24}></Icon>
//             )
//         }
//       }
//     }
//   )
const HomeTab = createMaterialTopTabNavigator({
  Tab1: HomeScreen,
  Tab2: HomeScreen,
  Tab3: HomeScreen,
  Tab4: HomeScreen,
  Tab5: HomeScreen,
  Tab6: HomeScreen,
  Tab7: HomeScreen,
},
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  });

HomeTab.navigationOptions = {
  header: (

    <View style={{ width: 300 }}>
      <Text>header</Text>
    </View>

  ),
};

const HomeStack = createStackNavigator({
  Home: { screen: HomeTab },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
      {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home')
        {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings')
        {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
));
