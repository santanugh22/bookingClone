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
const Stack=createStackNavigator()
const Tab=createBottomTabNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Main' component={TabGroup} options={{headerShown:false}}/>
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
                <Ionicons name="home" size={24} color="black" />
              ) : (
                <Ionicons name="home-outline" size={24} color="black" />
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
                <AntDesign name="heart" size={24} color="black" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
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
                <FontAwesome name="bell" size={24} color="blue" />
              ) : (
                <FontAwesome name="bell-o" size={24} color="blue" />
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
                <FontAwesome5 name="user-alt" size={24} color="black" />
              ) : (
                <FontAwesome5 name="user" size={24} color="black" />
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