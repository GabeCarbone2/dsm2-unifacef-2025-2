  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import HomeScreen from './screens/HomeScreen';
  import CompromissosUsuario from './screens/CompromissosUsuario';
  import CompromissosEquipe from './screens/CompromissosEquipe';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Início" component={HomeScreen} />
      <Stack.Screen name="Meus compromissos" component={CompromissosUsuario} />
      <Stack.Screen name="Compromissos da equipe" component={CompromissosEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  };