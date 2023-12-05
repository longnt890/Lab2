  import "react-native-gesture-handler";
  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'

  import Contact from './screen/Contacts';
  import Profile from './screen/Profile';
  import TabNavigator from './components/route2'
  import Favorites from "./screen/Favorites";
  import User from "./screen/User";
  import { NavigationContainer } from '@react-navigation/native';
  import { SafeAreaProvider } from 'react-native-safe-area-context'; 
  import { SignupScreen} from './firebase/index';

  const App = () => {


    return (
      <SafeAreaProvider> 
        <TabNavigator/> 
      </SafeAreaProvider>
    )
  }

  export default App;

  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#808080',
    //   marginTop: 30
    },
  })