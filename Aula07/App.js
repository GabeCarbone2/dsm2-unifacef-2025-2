import React, { useState, useMemo, useCallback } from 'react';
import { View,Text,TextInput,SectionList, StyleSheet,SafeAreaView, Dimensions,} from 'react-native';

const produtos = [
  { id: '1', nome: 'Notebook Gamer', preco: 4500, categoria: 'Eletrônicos' },
  { id: '2', nome: 'Smartphone', preco: 2800, categoria: 'Eletrônicos' },
  { id: '3', nome: 'TV 50"', preco: 3200, categoria: 'Eletrônicos' },
  { id: '4', nome: 'Camiseta', preco: 80, categoria: 'Roupas' },
  { id: '5', nome: 'Calça Jeans', preco: 150, categoria: 'Roupas' },
  { id: '6', nome: 'Jaqueta de Couro', preco: 400, categoria: 'Roupas' },
  { id: '7', nome: 'Sofá Retrátil', preco: 2500, categoria: 'Móveis' },
  { id: '8', nome: 'Mesa de Jantar', preco: 1800, categoria: 'Móveis' },
  { id: '9', nome: 'Cadeira Gamer', preco: 900, categoria: 'Móveis' },
];

export default function App() {
  const [filtro, setFiltro] = useState('');
  const produtosFiltrados = useMemo(() => {
    const filtrados = produtos.filter((p) =>
      p.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    const categorias = [...new Set(filtrados.map((p) => p.categoria))];

    return categorias.map((categoria) => ({
      title: categoria,
      data: filtrados.filter((p) => p.categoria === categoria),
    }));
  }, [filtro]);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    );
  }, []);

  const renderSectionHeader = useCallback(({ section }) => (
    <Text style={styles.header}>{section.title}</Text>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>🛍️ Catálogo Interativo</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={filtro}
        onChangeText={setFiltro}
      />

      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.05,
  },
  titulo: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    padding: 8,
    marginTop: 10,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  preco: {
    color: 'gray',
    fontSize: width * 0.04,
  },
});
