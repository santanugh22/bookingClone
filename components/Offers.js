import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const offersData=[
    {
        id:1,
        desc:"Get 100% Discount on all air travels"

    },{
        id:2,
        desc:"Best offers in the railway booking yeee"

    },
    {
        id:3,
        desc:"I dont know what to write here baby"

    },
    {
        id:4,
        desc:"The fountain of youth sale is now LIve"

    }
]
const Offers = () => {
  return (
    <ScrollView style={{flex:1 ,height:300,marginTop:14,marginHorizontal:2}} horizontal showsHorizontalScrollIndicator={false}>
        {
            offersData.map((item,index)=>{
                return <View key={index} style={{height:200,width:220,backgroundColor:index%2==0?'#003580':'white',marginLeft:10,gap:12,borderRadius:12,
                shadowColor:index%2==0?'#FFC72C':'black',
                shadowOffset:{
                    height:0,
                    width:0
                },
                shadowRadius:1,
                shadowOpacity:1,
                justifyContent:'center',
                alignItems:'center'
                }}>
                    <Text style={{flexWrap:'wrap',color:index%2==0?'white':'black',fontSize:17,padding:12,fontWeight:400}}
                    
                    >
                        {
                            item.desc
                        }
                    </Text>

                </View>
            })
        }

    </ScrollView>
   
  )
}
export default Offers
const styles = StyleSheet.create({})