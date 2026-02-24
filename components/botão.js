import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:100,
    width:"60%"
  },
  texto: {
    color: '#fff700',
    fontSize: 16,
    fontWeight: 'bold',
  },
});