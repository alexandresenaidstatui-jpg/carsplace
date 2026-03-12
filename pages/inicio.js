import React from "react";
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Image
} from "react-native";

export default function Inicio({ navigation }){

return(

<View style={styles.container}>

<Image
source={require("../assets/logo2.png")}
style={styles.logo}
/>

<Text style={styles.titulo}>XLmotors</Text>

<Text style={styles.subtitulo}>
Automóveis de luxo e alta performance
</Text>

<TouchableOpacity
style={styles.botaoComprar}
onPress={()=>navigation.navigate("Comprar")}
>
<Text style={styles.textoBotao}>Comprar veículo</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.botaoVender}
onPress={()=>navigation.navigate("Vender")}
>
<Text style={styles.textoBotao2}>Vender veículo</Text>
</TouchableOpacity>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#000",
justifyContent:"center",
alignItems:"center",
padding:30
},

logo:{
width:140,
height:140,
marginBottom:20
},

titulo:{
fontSize:34,
color:"#D4AF37",
fontWeight:"bold"
},

subtitulo:{
color:"#aaa",
fontSize:16,
textAlign:"center",
marginBottom:50
},

botaoComprar:{
width:"100%",
height:55,
backgroundColor:"#D4AF37",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
marginBottom:20
},

botaoVender:{
width:"100%",
height:55,
borderWidth:2,
borderColor:"#D4AF37",
borderRadius:12,
justifyContent:"center",
alignItems:"center"
},

textoBotao:{
color:"#000",
fontSize:18,
fontWeight:"bold"
},

textoBotao2:{
color:"#D4AF37",
fontSize:18,
fontWeight:"bold"
}

});