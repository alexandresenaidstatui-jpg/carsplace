//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/login";
import cadastro from "./pages/cadastro";


export default function App(){

  const Stack = createBottomTabNavigator();
  return(

    <NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Cadastro" component={cadastro} />
</Stack.Navigator>
    </NavigationContainer>
 
      
   
   
  );
}
   


