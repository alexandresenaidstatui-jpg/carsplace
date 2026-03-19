import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Image, 
  Alert
} from 'react-native';

export default function Login({navigation}) {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function Logar(){
    if(user === "" || pass === ""){
      Alert.alert("ERRO", "Favor preencher todos os campos!");
    } 
    else if(user === "Matheus" && pass === "123"){
      Alert.alert("Sucesso!", "Usuário logado com sucesso!");
      navigation.navigate("Welcome");
    } 
    else{
      Alert.alert("ERRO!", "Usuário não cadastrado!");
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/logo2.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>XLmotors</Text>
      <Text style={styles.subtitulo}>Automóveis de luxo</Text>

      <TextInput 
            style={styles.input} 
            placeholder="Usuário" 
            placeholderTextColor="#888"
            value={user}
            onChangeText={setUser}
          />

       <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#888" 
            secureTextEntry={true}
            value={pass}
            onChangeText={setPass}
          />


      <TouchableOpacity style={styles.botao}onPress={Logar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.criarConta}>
          Não tem conta? Criar conta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20
  },

  titulo: {
    fontSize: 32,
    color: "#D4AF37",
    fontWeight: "bold"
  },

  subtitulo: {
    color: "#aaa",
    marginBottom: 40
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#111",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333"
  },

  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#D4AF37",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },

  textoBotao: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },

  criarConta: {
    color: "#D4AF37",
    marginTop: 20
  }

});
   
