import { TextInput,StyleSheet } from "react-native";


export default function Input({placeholder, placeholderTextColor}){
return(

<TextInput style={style.input} placeholder={placeholder} placeholderTextColor={placeholderTextColor}/>


)


}

const style = StyleSheet.create({

    input:{
        
        width:350,
        height:50,
        borderWidth:3,
        borderRadius:10,
        borderColor:"#cec401",
        color:"#ffffff",
        backgroundColor:"black",


    }


})