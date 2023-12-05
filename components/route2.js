import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screen/Contacts';
import Profile from '../screen/Profile';
import Favorites from '../screen/Favorites';
import User from '../screen/User';
import Options from '../screen/Option';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../utility/color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


    const getTabBarIcon = (icon )=> ({ tintColor }) => (
        <FontAwesome name={icon} size={24} style={{ color: tintColor }} />
    );

const Stack = createStackNavigator();
const ContactsScreens = () => {
  return (   
            <Stack.Navigator 
                                // initialRouteName="Contacts"
                                // screenOptions={{
                                //     headerTintColor: 'white',
                                //     headerStyle: {backgroundColor: 'tomato'},
                                //     headerTitleAlign: 'center',
                                    
                                // }}
                                initialRouteName="Contacts"
                                screenOptions={
                                    {
                                        headerShown: false
                                    }
                                }
                            >
                <Stack.Screen name= 'Contacts' component={Contacts} 
                options={{title:"Contacts"}}/>
                <Stack.Screen 
                                name= 'Profile' 
                                component={Profile} 
                                options={({route}) =>
                                    {
                                        const {contact} = route.params;
                                        const {name} = contact;
                                        return {
                                            title: name.split(' ')[0],
                                            headerTintColor: 'white',
                                            headerStyle: {
                                                backgroundColor: colors.blue,
                                            }
                                        };
                                    }
                                }
                            />

            </Stack.Navigator>
  );
}

const FavoritesScreens = () =>{
    return (
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
}

const UserScreens = ({navigation}) =>{
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name='User' component={User}
            options={{
                headerTitle: "Me",
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.blue,
                },
                headerRight: () =>(
                    <FontAwesome
                        name="gear"
                        size={24}
                        style={{color: 'white', marginRight:10}}
                        onPress={()=> navigation.navigate('Options')}/>
                ),
            }}/>
            <Stack.Screen name='Options' component={Options} options={{title:"Options"}}/>
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='ContactsScreens'
                barStyle={{backgroundColor: colors.greyLight}}
                labeled={false}
                activeColor={colors.greyLight}
                inactiveColor={colors.greyDark}
                >
                    <Tab.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('bars'),
                    }}/>
                    <Tab.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('star'),
                    }}/>
                    <Tab.Screen name="UserScreens" component={UserScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('user-circle'),
                    }}/>
                </Tab.Navigator>
        </NavigationContainer>
    );
}


export default TabNavigator;

