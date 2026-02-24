import { Text, StyleSheet } from "react-native";


export default function Titulo({tit}){
return(

<Text style={style.titulo}>{tit}</Text>


)


}

const style = StyleSheet.create({

    titulo:{
        fontSize:70,
        color:"gold"
    }


})