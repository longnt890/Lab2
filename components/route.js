import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from '../screen/Contacts';
import Profile from '../screen/Profile';
import Favorites from "../screen/Favorites";
import User from "../screen/User";

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const Stack = createStackNavigator();

const ContactsScreens = () => (
  <Stack.Navigator initialRouteName="Contacts" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'tomato' }, headerTitleAlign: 'center' }}>
    <Stack.Screen
      name='Contacts'
      component={Contacts}
      options={{ title: 'Contacts' }}
    />
    <Stack.Screen
      name='Profile'
      component={Profile}
      options={({ route }) => {
        const { contact } = route.params;
        const { name } = contact;
        return {
          title: name.split(' ')[0],
          headerTintColor: 'white',
        }
      }}
    />
  </Stack.Navigator>
);

const FavoritesScreens = () => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen
      name='Favorites'
      component={Favorites}
      options={{ title: 'Favorites' }}
    />
    <Stack.Screen
      name='Profile'
      component={Profile}
      options={{ title: 'Profile' }}
    />
  </Stack.Navigator>
);

const UsersScreens = (navigate) => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen
      name='User'
      component={User}
      options={{ title: 'User' }}
    />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ContactsScreens">
        <Tab.Screen
          name='ContactsScreens'
          component={ContactsScreens}
          options={{ tabBarIcon: getTabBarIcon('list') }}
        />
        <Tab.Screen
          name='FavoritesScreens'
          component={FavoritesScreens}
          options={{ tabBarIcon: getTabBarIcon('star') }}
        />
        <Tab.Screen
          name='UsersScreens'
          component={UsersScreens}
          options={{ tabBarIcon: getTabBarIcon('person') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  ) 
}


export default TabNavigator;
