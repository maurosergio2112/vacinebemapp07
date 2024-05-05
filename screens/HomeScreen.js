import React from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à aplicação de vacinas!</Text>
      <Button
        title="Questionário de Vacina"
        onPress={() => navigation.navigate('Questionario')}
      />
      <Button
        title="Abas de Informações de Vacinas"
        onPress={() => navigation.navigate('AbasVacinas')}
      />
      <Button
        title="Cartão de Vacina"
        onPress={() => navigation.navigate('CartaoVacina')}
      />

<Button
        title="Calendario de vacinação"
        onPress={() => navigation.navigate('CalendarioVacinacaoScreen')}
      />
    </View>
  );
};

export default HomeScreen;
