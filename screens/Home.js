import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity

} from "react-native";

import HeaderComp from "../components/HeaderComp";
import { EvilIcons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Button } from "react-native";
import Offers from "../components/Offers";
const COLOR = "#003580";

const Home = ({ navigation }) => {


  const dateOfNow=new Date().toDateString()
  const [datePicker, setDatePicker] = useState(false);

  // this are all the inputs that are going to be submitted
  const [destination, setDestination] = useState(null);
  const [journeryDate, setJourneyDate] = useState(dateOfNow);
  const [visibility,setVisibility]=useState(false)




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

      <Pressable onPress={()=>setVisibility(!visibility)}>
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
      </Pressable>

     

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
   
        


     
          <ModalView visibility={visibility} setVisibility={setVisibility} numberOfPax={numberOfPax} setNumberOfPax={setNumberOfPax}/>





          {/* This is the begining of the Offers Section of the page */}
          <Offers/>

          {/* End of the Offers Section */}


          {/* This is the Booking.Com Logo */}

          <View style={{height:200,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
               <Text style={{fontSize:40,fontWeight:600,color:COLOR}}>Booking</Text>
               <Text style={{fontSize:40,fontWeight:600,color:'blue'}}>.com</Text>
            </View>
           

          </View>


       




  



         


    </>
  );
};
export default Home;


function ModalView({visibility,setVisibility,numberOfPax,setNumberOfPax}){
 
 

  return  <Modal animationType="slide" visible={visibility} style={{height:'100%',width:'100%'}} transparent={true}>
    <View style={{top:'50%',backgroundColor:'white',height:'50%',width:'100%',borderRadius:10,
    shadowColor:'black',
    shadowOffset:{
      height:12,
      width:10
    },
    shadowRadius:7,
    shadowOpacity:0.8,
    elevation:7,
    borderColor:'black',
    borderTopWidth:0.3,
    overflow:'hidden'

  
  }}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#E8E8E8',height:40}}>


      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:300,color:'black'}}>Select number of Guest</Text>
      </View>
       
    
     


    </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
   

        <View>
          <Text>Number of Children</Text>
        </View>



        <View style={{flexDirection:'row',height:60,width:200,justifyContent:'space-between',alignItems:'center'}}>

            <Pressable onPress={()=>{setNumberOfPax({...numberOfPax,['children']:numberOfPax.children+1})}}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>
          
                   <Text style={{fontSize:30}}>+</Text>
          
            </View>
              </Pressable>
            
       



          <View><Text>{numberOfPax.children}</Text></View>

             <Pressable onPress={()=>{
              if(numberOfPax.children==0){
                return
              }
              setNumberOfPax({...numberOfPax,['children']:numberOfPax.children-1})
            }}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>

         
               <Text style={{fontSize:30}}>-</Text>
          
           </View>
             </Pressable>

        </View>




      </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
   

        <View>
          <Text>Number of Adults</Text>
        </View>



        <View style={{flexDirection:'row',height:60,width:200,justifyContent:'space-between',alignItems:'center'}}>

            <Pressable onPress={()=>{setNumberOfPax({...numberOfPax,['adult']:numberOfPax.adult+1})}}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>
          
                   <Text style={{fontSize:30}}>+</Text>
          
            </View>
              </Pressable>
            
       



          <View><Text>{numberOfPax.adult}</Text></View>

             <Pressable onPress={()=>{
              if(numberOfPax.adult==0){
                return
              }
              setNumberOfPax({...numberOfPax,['adult']:numberOfPax.adult-1})
            }}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>

         
               <Text style={{fontSize:30}}>-</Text>
          
           </View>
             </Pressable>

        </View>




      </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
   

        <View>
          <Text>Number of Rooms</Text>
        </View>



        <View style={{flexDirection:'row',height:60,width:200,justifyContent:'space-between',alignItems:'center'}}>

            <Pressable onPress={()=>{setNumberOfPax({...numberOfPax,['rooms']:numberOfPax.rooms+1})}}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>
          
                   <Text style={{fontSize:30}}>+</Text>
          
            </View>
              </Pressable>
            
       



          <View><Text>{numberOfPax.rooms}</Text></View>

             <Pressable onPress={()=>{
              if(numberOfPax.children==0){
                return
              }
              setNumberOfPax({...numberOfPax,['children']:numberOfPax.children-1})
            }}>
          <View style={{height:50,width:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',borderColor:'black',borderWidth:0.4,borderRadius:20}}>

         
               <Text style={{fontSize:30}}>-</Text>
          
           </View>
             </Pressable>

        </View>




      </View>



    <TouchableOpacity style={{backgroundColor:COLOR,height:60,width:'100%',top:100,justifyContent:'center',alignItems:'center'}} onPress={()=>setVisibility(false)}>
      <Text style={{color:'white',fontSize:21}}>Apply</Text>
    </TouchableOpacity>
  
    
      

    </View>

  </Modal>


}


const styles = StyleSheet.create({});
