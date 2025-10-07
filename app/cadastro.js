import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { adicionarCarro } from './data';

let placa = '';
let marca = '';
let modelo = '';
let valor = '';
let ano = '';

export default function Cadastro() {
  function salvar() {
    adicionarCarro({ placa, marca, modelo, valor, ano });
    alert('Carro cadastrado com sucesso!');
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro de Carros</Text>

      <TextInput placeholder="Placa" style={estilos.input} onChangeText={t => (placa = t)} />
      <TextInput placeholder="Marca" style={estilos.input} onChangeText={t => (marca = t)} />
      <TextInput placeholder="Modelo" style={estilos.input} onChangeText={t => (modelo = t)} />
      <TextInput placeholder="Valor" style={estilos.input} onChangeText={t => (valor = t)} />
      <TextInput placeholder="Ano" style={estilos.input} onChangeText={t => (ano = t)} />

      <TouchableOpacity onPress={salvar}>
        <Text style={estilos.botao}>Salvar</Text>
      </TouchableOpacity>

      <Link href="/">
        <Text style={estilos.botaoVoltar}>Voltar</Text>
      </Link>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 22, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 200,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 100,
    marginBottom: 10,
  },
  botaoVoltar: {
    backgroundColor: 'gray',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 100,
  },
});
