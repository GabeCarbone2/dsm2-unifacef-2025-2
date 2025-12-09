import { View, Text, FlatList, StyleSheet } from 'react-native';
import compromissos from '../data/compSemana';

export default function CompromissosDia() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>11/11 (ter)</Text>
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
    paddingTop: 25,
    paddingHorizontal: 20
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 2
  },
  list: {
    marginTop: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'left',
  },
});
