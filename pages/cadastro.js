import React from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Image
} from "react-native";

export default function Cadastro({ navigation }) {

return (

<View style={styles.container}>

<Image
source={require("../assets/logo2.png")}
style={styles.logo}
/>

<Text style={styles.titulo}>Criar Conta</Text>
<Text style={styles.subtitulo}>Entre para a XLmotors</Text>

<TextInput
placeholder="Nome completo"
placeholderTextColor="#999"
style={styles.input}
/>

<TextInput
placeholder="Email"
placeholderTextColor="#999"
style={styles.input}
/>

<TextInput
placeholder="Senha"
placeholderTextColor="#999"
secureTextEntry
style={styles.input}
/>

<TextInput
placeholder="Confirmar senha"
placeholderTextColor="#999"
secureTextEntry
style={styles.input}
/>

<TouchableOpacity style={styles.botao}>
<Text style={styles.textoBotao}>Criar conta</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate("Login")}>
<Text style={styles.login}>
Já tem conta? Entrar
</Text>
</TouchableOpacity>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#000",
alignItems:"center",
justifyContent:"center",
padding:30
},

logo:{
width:110,
height:110,
marginBottom:20
},

titulo:{
fontSize:30,
fontWeight:"bold",
color:"#D4AF37"
},

subtitulo:{
color:"#aaa",
marginBottom:30
},

input:{
width:"100%",
height:50,
backgroundColor:"#111",
borderRadius:10,
paddingHorizontal:15,
color:"#fff",
marginBottom:15,
borderWidth:1,
borderColor:"#333"
},

botao:{
width:"100%",
height:50,
backgroundColor:"#D4AF37",
borderRadius:10,
alignItems:"center",
justifyContent:"center",
marginTop:10
},

textoBotao:{
fontSize:18,
fontWeight:"bold",
color:"#000"
},

login:{
color:"#D4AF37",
marginTop:20
}

});
   
