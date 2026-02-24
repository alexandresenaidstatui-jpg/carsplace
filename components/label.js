import { Text, StyleSheet } from "react-native";


export default function Texto({txt}){
return(

<Text style={style.label}>{txt}</Text>


)


}

const style = StyleSheet.create({

    label:{
        alignSelf:"flex-start",
        fontSize:25,
        color:"#ffff",
        marginLeft:20,
        margin:10,
    }


})