import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaInicial from './screens/PaginaInicial';
import CompromissosDia from './screens/CompromissosDia';
import CompromissosSemana from './screens/CompromissosSemana';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={PaginaInicial} />
        <Stack.Screen name="Compromissos do dia" component={CompromissosDia} />
        <Stack.Screen name="Compromissos da semana" component={CompromissosSemana} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
