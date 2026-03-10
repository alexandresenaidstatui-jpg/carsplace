import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao_inicio({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#fff200ce',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginRight:230,
    marginTop:50,
    width:"30%"
  },
  texto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});