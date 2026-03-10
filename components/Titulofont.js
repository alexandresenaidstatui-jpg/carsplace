import { Text, StyleSheet } from "react-native";


export default function Fontinicial({tit}){
return(

<Text style={style.titulo}>{tit}</Text>


)


}

const style = StyleSheet.create({

    titulo:{
        fontSize:35,
        color:"gold"
    }


})