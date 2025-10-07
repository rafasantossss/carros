import { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { carros } from './data';

export default function Consulta() {
  const [listaCarros, setListaCarros] = useState([]);

  useEffect(() => {
    setListaCarros(carros);
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Carros Cadastrados</Text>

      <ScrollView style={estilos.lista}>
        {listaCarros.length === 0 ? (
          <Text style={estilos.vazio}>Nenhum carro cadastrado.</Text>
        ) : (
          listaCarros.map((carro, i) => (
            <View key={i} style={estilos.item}>
              <Text>Placa: {carro.placa}</Text>
              <Text>Marca: {carro.marca}</Text>
              <Text>Modelo: {carro.modelo}</Text>
              <Text>Valor: {carro.valor}</Text>
              <Text>Ano: {carro.ano}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <Link href="/">
        <Text style={estilos.botaoVoltar}>Voltar</Text>
      </Link>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  titulo: { fontSize: 22, marginBottom: 10 },
  lista: { width: '100%' },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  vazio: { textAlign: 'center', marginTop: 20 },
  botaoVoltar: {
    backgroundColor: 'gray',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 100,
    marginTop: 10,
  },
});
