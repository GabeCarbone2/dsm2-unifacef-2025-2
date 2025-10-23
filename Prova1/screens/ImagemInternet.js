import { View, Text, Button, StyleSheet } from 'react-native';

export default function ImagemInternet({ navigation }){
    return(
        <View style={styles.container}>
        <Image source={{ uri: 'https://www.devmedia.com.br/arquivos/cursos/react_intro/thumb.png' }} style={{ width: 100, height: 100 }}/>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});