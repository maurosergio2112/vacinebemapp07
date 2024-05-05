import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import QuestionarioScreen from "./screens/QuestionarioScreen";
import AbasVacinas from "./screens/Abasvacinas";
import CartaoVacinaScreen from "./screens/CartaoVacinaScreen";
import CalendarioVacinacaoScreen from "./screens/CalendarioVacinacaoScreen";
import { AppRegistry } from "react-native";

const Stack = createStackNavigator();

// Registro do componente App
AppRegistry.registerComponent("main", () => App);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Questionario"
          component={QuestionarioScreen}
          options={{ title: "Questionário de Vacina" }}
        />
        <Stack.Screen
          name="AbasVacinas"
          component={AbasVacinas}
          options={{ title: "Abas de Informações de Vacinas" }}
        />
        <Stack.Screen
          name="CartaoVacina"
          component={CartaoVacinaScreen}
          options={{ title: "Cartão de Vacina" }}
        />
        <Stack.Screen
          name="CalendarioVacinacaoScreen"
          component={CalendarioVacinacaoScreen}
          options={{ title: "Calendario de Vacinação" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
