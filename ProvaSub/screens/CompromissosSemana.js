import { View, Text, SectionList, StyleSheet } from 'react-native';
import compromissos from '../data/compSemana';

export default function CompromissosSemana() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Gabriel Rodrigues Carbone</Text>
      <Text style={styles.subtitle}>Sistemas de Informação</Text>
      <SectionList
        sections={compromissos}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },
  subtitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5
  },
  item: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 10,
  }
});
