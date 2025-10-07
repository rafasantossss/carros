import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { adicionarCarro } from './data';

export default function Cadastro() {
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [valor, setValor] = useState("");
  const [carregando, setCarregando] = useState(false);

  function salvar() {
    setCarregando(true);
    adicionarCarro({ placa, marca, modelo, valor, ano });
    setCarregando(false);
    alert('Carro cadastrado com sucesso!');
    setPlaca(""); setMarca(""); setModelo(""); setAno(""); setValor("");
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro de Carros</Text>

      <TextInput placeholder="Placa" style={estilos.input} value={placa} onChangeText={setPlaca} />

      <Picker
        selectedValue={marca}
        style={estilos.input}
        onValueChange={(itemValue) => setMarca(itemValue)}
      >
        <Picker.Item label="Selecione a marca" value="" />
        <Picker.Item label="Fiat" value="Fiat" />
        <Picker.Item label="Ford" value="Ford" />
        <Picker.Item label="Chevrolet" value="Chevrolet" />
        <Picker.Item label="Volkswagen" value="Volkswagen" />
      </Picker>

      <TextInput placeholder="Modelo" style={estilos.input} value={modelo} onChangeText={setModelo} />
      <TextInput placeholder="Valor" style={estilos.input} value={valor} onChangeText={setValor} />
      <TextInput placeholder="Ano" style={estilos.input} value={ano} onChangeText={setAno} />

      <TouchableOpacity onPress={salvar}>
        <Text style={estilos.botao}>{carregando ? 'Salvando...' : 'Salvar'}</Text>
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
