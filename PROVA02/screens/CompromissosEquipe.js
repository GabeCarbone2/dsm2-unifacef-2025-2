import { View, Text, SectionList, StyleSheet } from 'react-native';

const dados = [
  {
    title: '(Eu)',
    data: [
      '09:30 - Reunião Daily',
      '14:00 - Reunião com cliente Carros & Carros',
      '16:30 - Prazo final Projeto X'
    ]
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09:30 - Reunião Daily',
      '12:00 - Almoço com a diretoria',
      '15:00 - Saída vagem oficina'
    ]
  },
  {
    title: 'Aderbal',
    data: [
      '09:30 - Reunião Daily',
      '14:30 - Visita técnica Uni-FACEF',
      '16:30 - Prazo final Projeto X'
    ]
  }
];

export default function EquipeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Gabriel Rodrigues Carbone</Text>
      <Text style={styles.subtitle}>Sistemas de Informação</Text>
      <SectionList
        sections={dados}
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
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  item: {
    fontSize: 15,
    marginBottom: 8,
  }
});
