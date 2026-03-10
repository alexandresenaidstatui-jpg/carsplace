import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao_inicio2({ titulo, onPress }) {
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
    paddingHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:10,
    width:"30%"
  },
  texto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});