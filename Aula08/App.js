import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imagem, setImagem] = useState('https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg');
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    (async () => {
      try {
        if (!cameraPermission?.granted) {
          await requestCameraPermission();
        }
        if (!mediaPermission?.granted) {
          await requestMediaPermission();
        }
      } catch (err) {
        console.warn('Erro ao pedir permissão:', err);
      }
    })();
  }, []);

  async function abrirCamera() {
    if (!cameraPermission?.granted) {
      const perm = await requestCameraPermission();
      if (!perm.granted) {
        Alert.alert('Permissão negada', 'Precisamos da permissão da câmera para tirar fotos.');
        return;
      }
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!result.canceled) {
        setImagem(result.assets[0].uri);
      }
    } catch (err) {
      console.warn('Erro ao abrir câmera:', err);
    }
  }

  async function abrirGaleria() {
    if (!mediaPermission?.granted) {
      const perm = await requestMediaPermission();
      if (!perm.granted) {
        Alert.alert('Permissão negada', 'Precisamos da permissão da galeria para escolher imagens.');
        return;
      }
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled) {
        setImagem(result.assets[0].uri);
      }
    } catch (err) {
      console.warn('Erro ao abrir galeria:', err);
    }
  }

  function removerFoto() {
    Alert.alert('Remover foto', 'Deseja remover a foto do avatar?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Remover', style: 'destructive', onPress: () => setImagem('https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg') },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.avatarContainer}>
        <Image source={{ uri: imagem }} style={styles.avatarImage} />
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={abrirCamera}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={abrirGaleria}>
          <Text style={styles.buttonText}>Escolher da Galeria</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 12 }}>
        <Button title="Remover foto" onPress={removerFoto} color="#c62828" />
      </View>

      <Text style={styles.dica}>Dica: corte em formato quadrado funciona melhor para avatares circulares.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 18,
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#eceff1',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  dica: {
    marginTop: 20,
    color: '#616161',
    fontSize: 12,
    textAlign: 'center',
  },
});
