// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import screen1 from './screen/screen1'
import screen2 from './screen/screen2'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: "hello workd ",  }} />
        <Stack.Screen name='Screen1' component={screen1} />
        <Stack.Screen name='Screen2' component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;