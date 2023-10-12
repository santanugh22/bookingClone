import { Pressable, StyleSheet, Text, View } from 'react-native'
const COLOR='#003580'
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const HeaderComp = () => {
  return (
    <View
      style={{
        height:65,

        flexDirection: "row",
        backgroundColor: COLOR,


        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "white",
          padding: 12,
        }}
      >
        <FontAwesome name="hotel" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 4,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Hotel
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="car-rental" size={24} color="white" />

        <Text
          style={{
            color: "white",
            marginLeft: 4,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="flight" size={26} color="white" />

        <Text
          style={{
            color: "white",
            marginLeft: 4,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Hotel
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="local-taxi" size={24} color="white" />

        <Text style={{ color: "white", marginLeft: 4, fontSize: 17,fontWeight:'bold' }}>
          Hotel
        </Text>
      </Pressable>
    </View>
  );
}
export default HeaderComp
const styles = StyleSheet.create({})