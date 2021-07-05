import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home'
import AppointmentTabs from './app/AppointmentTabs'
import Book from './app/Book'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#29a5db',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
         
        />
                <Stack.Screen name="BookAppointment" component={AppointmentTabs} />
                <Stack.Screen name="Book" component={Book} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
