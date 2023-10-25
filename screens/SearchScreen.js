import { SafeAreaView, StyleSheet, Text, View,TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import SearchResults from './SearchResults';


const PlacesData=[
  {
    id:1,
    place:'Bangalore',
    properties:2,
    img:'https://www.thehosteller.com/_next/image?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FCover%20(1).jpg%2FCover%20(1)-1690261803767.jpg&w=2048&q=75'
  },
   {
    id:2,
    place:'Kolkata',
    properties:12,
    img:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Kolkata_City_skyline_from_Hoogly_bridge.jpg'
  },
   {
    id:3,
    place:'Delhi',
    properties:25,
    img:'https://cdn.getyourguide.com/img/location/533591d4b943b.jpeg/99.jpg'
  },
   {
    id:4,
    place:'Mumbai',
    properties:21,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/640px-Mumbai_Aug_2018_%2843397784544%29.jpg'
  },
  {
    id:5,
    place:'Hyderabad',
    properties:21,
    img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Charminar_sumeet_photography_3.JPG'
  }, {
    id:6,
    place:'Jammu',
    properties:21,
    img:'https://gumlet.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Ftravelnews%2Fshutterstock_469416422.jpg'
  },
  {
    id:7,
    place:'Jaipur',
    properties:21,
    img:'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg'
  }
]
const SearchScreen = () => {

  const [searchval,setSearchVal]=useState("")

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'white',height:50,width:'90%',alignSelf:'center',borderColor:'#FFC72C' ,borderWidth:5,justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
        <TextInput placeholder='Search Your Destination'
        value={searchval} onChangeText={(text)=>setSearchVal(text)} style={{flex:1,fontSize:21,paddingLeft:12}}/>
        <Feather name="search" size={24} color="black" style={{alignSelf:'center',marginRight:10}} />
      </View>
      <View>
        <SearchResults data={PlacesData} input={searchval}/>
      </View>
    </SafeAreaView>
   
  )
}
export default SearchScreen
const styles = StyleSheet.create({})