import { View, StyleSheet } from "react-native";


export default function Container({children}){
return(

<View style={style.cont}>{children}</View>


)


}

const style = StyleSheet.create({

    cont:{
        width:"90%",
        height:"50%",
        backgroundColor:"#46440c6a",
        justifyContent:"center",
        alignItems:"center",
    }


})