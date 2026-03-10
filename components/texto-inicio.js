import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Texto_inicio({txt}){

    const [fonts] = useFonts({

        'teste':require('../assets/fonts/fontecerta.ttf')

    })

if(!fonts){

    return null;
}

return(

<Text style={style.label}>{txt}</Text>


)


}

const style = StyleSheet.create({

    label:{
        alignSelf:"flex-start",
        fontSize:25,
        color:"#ffff",
        marginLeft:60,
        margin:10,
        fontFamily:"teste",
    }


})