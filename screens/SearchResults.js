import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View ,FlatList,Image, Pressable} from 'react-native'
const SearchResults = ({data,input}) => {
  const navigation=useNavigation()
  return (
    <View>
      <FlatList data={data} renderItem={({item})=>{
        if (item.place.toLowerCase().includes(input.toLowerCase())){
          if(input.length==0){
            return null
          }
          return <Pressable onPress={()=>navigation.navigate("Home",{destination:item.place})}>
             <View style={{flex:1,marginTop:15}}>
            <View style={{marginLeft:30,flexDirection:'row'}}>
              <Image source={{uri:item.img}} style={{height:100,width:100,borderRadius:12}}/>
         
            <View style={{height:100,width:100,backgroundColor:'white',marginLeft:10,justifyContent:'center',paddingLeft:5}}>
            <Text>{item.place}</Text>
            <Text>{item.properties}</Text>
               </View>

          </View>
          </View> 
          </Pressable>
         
        }
    
      }}></FlatList>
    </View>
  )
}
export default SearchResults
const styles = StyleSheet.create({})