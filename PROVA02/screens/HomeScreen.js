import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do Dia</Text>
      <Text style={styles.subtitle}>Gabriel Rodrigues Carbone</Text>
      <Text style={styles.subtitle}>Sistemas de Informação</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meus compromissos')}>
        <Text style={styles.buttonText}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compromissos da equipe')}>
        <Text style={styles.buttonText}>Compromissos da equipe</Text>
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
    backgroundColor: '#CFCFCF',
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  }
});
