import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import FlatlistScreen from './screen/FlatlistScreen';
import Placeholder from './screen/Placeholder';
import DetailUser from './screen/DetailUser';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My Home',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Flat"
          component={FlatlistScreen}
          options={{
            title: 'Payments',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Placeholder"
          component={Placeholder}
          options={{
            title: 'Payments',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailUser}
          options={{
            title: 'Payments',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
