import { useEffect } from "react";
import { ImageBackground,image,StyleSheet } from "react-native";


export default function Splash({navigation}){

useEffect(()=>{


const time = setTimeout(()=>{

navigation.navigate("Login");



},3000)
return ()=>clearTimeout(time);




},[])

return(


// <ImageBackground source={{uri:'https://i.pinimg.com/736x/2d/fe/a8/2dfea800fcfb871253e405f345a68780.jpg'}}> */}
<ImageBackground source={require('../assets/logo.png')} style={style.ImgBack}>


</ImageBackground>


)



}
const style = StyleSheet.create({

    ImgBack:{
        flex:1,
        justifyContent:"center",
        alignitems:"center",





    },
    imgLogo:{

width:400,
height:200



    }


})
  