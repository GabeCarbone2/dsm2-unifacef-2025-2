import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }){
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.container}></Text>
            <Text style={styles.title}>Agenda do Dia</Text>
            <Text style={styles.subtile}>Gabriel Rodrigues Carbone</Text>
            <Text style={styles.subtile}>Sistemas de informação</Text>

            <View style={styles.buttons}>
                <Button title="Meus compromissos" onPress={() => navigation.navigate('Meus compromissos')} />
                <Button title="Compromisos da Equipe" onPress={() => navigation.navigate('Compromissos da equipe')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center'
  },
  buttonsContainer: {
    width: '75%',
    gap: 15
  },
  button: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  }
});