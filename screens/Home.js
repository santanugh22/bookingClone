import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View ,SafeAreaView, TextInput, Pressable} from 'react-native'
import HeaderComp from '../components/HeaderComp'
import { EvilIcons } from '@expo/vector-icons';
const COLOR='#003580'
const Home = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown: true,
          title: "Booking.Com",
          headerTitleStyle: {
            fontSize: 20,
            color: "white",
          },
          headerStyle: {
            backgroundColor: COLOR,
            height: 110,
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          },
          headerRight: () => (
            <View style={{flex:1,justifyContent:'center',marginRight:12}}>
              <EvilIcons
                name="bell"
                size={30}
                color="white"

              />
            </View>
          ),
        });

    },[])
  return (
    <>
      <HeaderComp />

      {/* This is the Input Fields of the Home Page */}
      <Pressable style={{alignItems:'center',paddingVertical:12}}>
     
          <TextInput
            style={{
              height: 50,
              width: "80%",
              borderColor: "#ffc72c",
              borderWidth: 2,
            }}
            placeholder="Search Destination"
          />

      </Pressable>

      <Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <TextInput
            style={{
              height: 50,
              width: "80%",
              borderColor: "#ffc72c",
              borderWidth: 2,
            }}
            placeholder="Search Destination"
          ></TextInput>
        </View>
      </Pressable>
    </>
  );
}
export default Home
const styles = StyleSheet.create({})