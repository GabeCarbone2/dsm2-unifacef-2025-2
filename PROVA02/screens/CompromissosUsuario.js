import { View, Text, StyleSheet } from 'react-native';

export default function CompromissosUsuario(){
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.info}>Gabriel Rodrigues Carbone</Text>
            <Text style={styles.info}>Sistemas de Informação</Text>

            <Text style={styles.item}>09h30: Reunião "Daily"</Text>
            <Text style={styles.item}>14h00: Reunião com o cliente Carros & Carros</Text>
            <Text style={styles.item}>16h30: Prazo final Projeto X</Text>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
tile: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign:'center'
},
info: {
    textAlign: 'center',
    fontSize:16
},
section: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: 'bold'
},
item: {
    fontSize: 16,
    marginTop: 10
}
});