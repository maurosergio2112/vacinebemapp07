// CartaoVacinaScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const CartaoVacinaScreen = ({ route }) => {
  const { vacinas } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cartão de Vacina</Text>
      <Text>Vacinas marcadas como sim:</Text>
      <View>
        {vacinas.map(vacina => (
          <Text key={vacina.id}>{vacina.nome}</Text>
        ))}
      </View>
      <Text>Vacinas marcadas como não:</Text>
      {/* Adicione aqui a lógica para mostrar visualmente as vacinas marcadas como não */}
    </View>
  );
};

export default CartaoVacinaScreen;
