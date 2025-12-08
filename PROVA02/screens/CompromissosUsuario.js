import { View, Text, FlatList, StyleSheet } from 'react-native';

const compromissos = [
  { id: '1', hora: '09:30', titulo: 'Reunião Daily' },
  { id: '2', hora: '14:00', titulo: 'Reunião com cliente Carros & Carros' },
  { id: '3', hora: '16:30', titulo: 'Prazo final Projeto X' },
];

export default function UsuarioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(Eu)</Text>
      <Text style={styles.subtitle}>Gabriel Rodrigues Carbone</Text>
      <Text style={styles.subtitle}>Sistemas de Informação</Text>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora} - {item.titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
  }
});
