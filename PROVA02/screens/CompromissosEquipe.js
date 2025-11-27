import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CompromissosEquipe(){
    return(
        <View style={styles.container}>

           <Text style={styles.info}>Gabriel Rodrigues Carbone</Text>
            <Text style={styles.info}>Sistemas de Informação</Text>

            <Text style={styles.section}>Gabriel</Text>
            <Text style={styles.item}>09h30: Reunião "Daily"</Text>
            <Text style={styles.item}>14h00: Reunião com o cliente Carros & Carros</Text>
            <Text style={styles.item}>16h30: Prazo final Projeto X</Text>

            <Text style={styles.section}>Jurema (chefe)</Text>
            <Text style={styles.item}>09h30 Reunião "Dailly"</Text>
            <Text style={styles.item}>12h00: Almoço com a Diretora</Text>
            <Text style={styles.item}>15h00: Saída Viagem</Text>

            <Text style={styles.section}> Aderbal</Text>
            <Text style={styles.item}>09h30: Reunião "Dailly"</Text>
            <Text style={styles.item}>16h30: Prazo Final Projeo X</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 25
    },
    section: {
        marginTop:20,
        fontSize:20,
        fontWeight:'bold'
    },
    item: {
    fontSize: 16,
    marginTop: 8
  }
})