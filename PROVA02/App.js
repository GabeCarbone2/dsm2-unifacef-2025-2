import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UsuarioScreen from './screens/CompromissosUsuario';
import EquipeScreen from './screens/CompromissosEquipe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Meus compromissos" component={UsuarioScreen} />
        <Stack.Screen name="Compromissos da equipe" component={EquipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
