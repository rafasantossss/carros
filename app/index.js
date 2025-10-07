import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.linha}>
        <Link href="/cadastro" style={estilos.link}>
          <Text style={estilos.botao}>Cadastrar</Text>
        </Link>

        <Link href="/consulta" style={estilos.link}>
          <Text style={estilos.botao}>Consultar</Text>
        </Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    flexDirection: 'row', // deixa lado a lado
    justifyContent: 'center',
  },
  link: {
    marginHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});
