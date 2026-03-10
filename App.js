//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/login";
import cadastro from "./pages/cadastro";
import inicio from "./pages/inicio";
import Splash from "./pages/splash";


export default function App(){

  const Stack = createBottomTabNavigator();
  return(

    <NavigationContainer>
<Stack.Navigator initialRouteName="Splash">
  <Stack.Screen name="Splash" component={Splash} options={{headerTransparent:true, headerTitle:""}}/>
<Stack.Screen name="Login" component={Login}options={{headerTransparent:true, headerTitle:""}} />
<Stack.Screen name="Cadastro" component={cadastro}options={{headerTransparent:true, headerTitle:""}} />
<Stack.Screen name="Inicio" component={inicio}options={{headerTransparent:true, headerTitle:""}} />
</Stack.Navigator>
    </NavigationContainer>
 
      
   
   
  );
}
   


