import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PaginaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.subtitle}>Gabriel Rodrigues Carbone</Text>
      <Text style={styles.subtitle}>Sistemas de Informação</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos do dia')}>
        <Text style={styles.buttonText}>COMPROMISSOS DO DIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos da semana')}>
        <Text style={styles.buttonText}>COMPROMISSOS DA SEMANA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 40,
  },
  button: {
    width: 200,
    backgroundColor: '#2c2b2bff',
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ece7e7ff',
  }
});
