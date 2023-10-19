import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal

} from "react-native";

import HeaderComp from "../components/HeaderComp";
import { EvilIcons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const COLOR = "#003580";

const Home = ({ navigation }) => {
  const dateOfNow=new Date().toDateString()
  const [datePicker, setDatePicker] = useState(false);

  // this are all the inputs that are going to be submitted
  const [destination, setDestination] = useState(null);
  const [journeryDate, setJourneyDate] = useState(dateOfNow);




  const [numberOfPax, setNumberOfPax] = useState({
    children: 0,
    adult: 2,
    rooms: 1,
  });

  useLayoutEffect(() => {
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
        <View style={{ flex: 1, justifyContent: "center", marginRight: 12 }}>
          <EvilIcons name="bell" size={30} color="white" />
        </View>
      ),
    });
  }, []);
  return (
    <>
      <HeaderComp />

      {/* let make the different inputs that has to be taken from the user */}

      {/* This is the Search Your Destiantion Input Bar */}

      <View
        style={{
          marginTop: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderColor: "#FFC72C",
            borderWidth: 4,
            height: 55,
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={{ height: 50, width: "90%", fontSize: 20 }}
            placeholderTextColor={"grey"}
            placeholder="Enter your destination"
          />
        </View>
      </View>

      {/* THis is the end of the searcing for the destination block of the code */}

      {/* This is Calender and the date picker of the calender */}
      <Pressable onPress={() => setDatePicker(true)}>
        <View
          style={{
            marginTop:1,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "#FFC72C",
              borderWidth: 2,
              height: 55,
              width: "90%",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <Feather
              name="calendar"
              size={24}
              color="black"
              style={{ marginLeft: 8, marginRight: 5 }}
            />

            {datePicker ? (
              <View
                style={{
                  backgroundColor: "pink",
                  height: 300,
                  width: 300,
                  marginTop: 250,
                }}
              >
                <CalendarPicker
                  onDateChange={(date) => {
                    setJourneyDate(date.toString());
                    setDatePicker(false);
                  }}
                  selectedStartDate={dateOfNow}
                  height={400}
                  width={300}
                ></CalendarPicker>
              </View>
            ) : (
              <Text style={{ color: "grey", fontSize: 17 }}>
                {journeryDate}
              </Text>
            )}
          </View>
        </View>
      </Pressable>
      {/* THis is the end of the calender block of the code */}

      {/* THIS IS THE NUMBER OF PERSON THAT IS TRAVELLING SELECTION PAGE */}

      <View
        style={{

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderColor: "#FFC72C",
            borderWidth: 3,
            height: 55,
            width: "90%",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color="black"
            style={{ marginLeft: 8 }}
          />
          <View style={{ marginLeft: 7 }}>
            <Text style={{ fontSize: 17 ,color:'red'}}>
              {numberOfPax.rooms} Room • {numberOfPax.adult} Adult •{" "}
              {numberOfPax.children} Children
            </Text>
          </View>
        </View>
      </View>

      {/* THIS IS THE END OF THE SELECITON OF THE NUMBER OF PERSON TRAVELLING */}

      {/* This is the button section of the page */}

        <Pressable style={{ alignItems: "center" ,marginTop:1}}>
          <View
            style={{
              height: 60,
              width: "90%",
              backgroundColor: COLOR,
              borderColor: "#FFC72C",
              borderWidth: 3,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{color:'white',fontSize:20}}>Search</Text>
          </View>

        </Pressable>


        {/* This is the end of the inner part of the web */}


  



         


    </>
  );
};
export default Home;

const styles = StyleSheet.create({});
