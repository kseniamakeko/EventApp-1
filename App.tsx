import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import Menu from './pages/Menu';
import ProfileScreen from './pages/ProfileScreen';
import RegisterScreen from './pages/RegisterScreen';
import SignUpVolunteerScreen from './pages/SignUpVolunteer';
import SignUpOrganizationScreen from './pages/SignUpOrganizationScreen';
import EventApplyScreen from './pages/EventApplyScreen';
import AddEventScreen from './pages/AddEventScreen';
import { AuthProvider } from './context/AuthContext';
const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen}/> 
          <Stack.Screen name='Register' component={RegisterScreen}/>
          <Stack.Screen name='SignUpVolunteer' component={SignUpVolunteerScreen} />
          <Stack.Screen name='SignUpOrganization' component={SignUpOrganizationScreen} />
          <Stack.Screen name='EventApplyScreen' component={EventApplyScreen}/>
          <Stack.Screen name='AddEventScreen' component={AddEventScreen}/>
        </Stack.Navigator>
        <Menu/>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
