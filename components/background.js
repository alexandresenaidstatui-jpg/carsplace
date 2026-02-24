import { ImageBackground, StyleSheet } from "react-native";

export default function Background({children}) {
  return (
    <ImageBackground
      source={require("../assets/back.png")} // coloque sua imagem aqui
      style={styles.background}
      resizeMode="cover"
    >{children}</ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
});