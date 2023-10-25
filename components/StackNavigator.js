import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Saved from '../screens/Saved'
import Bookings from '../screens/Bookings'
import Profile from '../screens/Profile'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import SearchScreen from '../screens/SearchScreen'
const COLOR = "#003580";
const Stack=createStackNavigator()
const Tab=createBottomTabNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Main' component={TabGroup} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={SearchScreen} options={{headerShown:false}}/>
    </Stack.Navigator>



   
  )
}

function TabGroup(){
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home" size={24} color={COLOR} />
              ) : (
                <Ionicons name="home-outline" size={24} color={COLOR} />
              ),
            tabBarLabel: "Home",
            tabBarLabelPosition: "below-icon",
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color={COLOR} />
              ) : (
                <AntDesign name="hearto" size={24} color={COLOR} />
              ),
            tabBarLabel: "Saved",
            tabBarLabelPosition: "below-icon",
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="bell" size={24} color={COLOR} />
              ) : (
                <FontAwesome name="bell-o" size={24} color={COLOR} />
              ),
            tabBarLabel: "Bookings",
            tabBarLabelPosition: "below-icon",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={24} color={COLOR} />
              ) : (
                <FontAwesome5 name="user" size={24} color={COLOR} />
              ),
            tabBarLabel: "Profile",
            tabBarLabelPosition: "below-icon",
          }}
        />
      </Tab.Navigator>
    );
}
export default StackNavigator
const styles = StyleSheet.create({})