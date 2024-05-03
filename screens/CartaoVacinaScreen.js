import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';


const CartaoVacinaScreen = () => {
  const [respostas, setRespostas] = useState([]);

  useEffect(() => {
    const getRespostas = async () => {
      try {
        // Recuperar as respostas do questionário do AsyncStorage
        const jsonValue = await AsyncStorage.getItem('respostasQuestionario');
        if (jsonValue !== null) {
          const respostasDoQuestionario = JSON.parse(jsonValue);
          // Extrair as respostas marcadas como sim
          const vacinasMarcadasSim = Object.keys(respostasDoQuestionario).filter(key => respostasDoQuestionario[key] === true);
          setRespostas(vacinasMarcadasSim);
        }
      } catch (error) {
        console.error('Erro ao recuperar as respostas do questionário:', error);
      }
    };

    getRespostas();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cartão de Vacina</Text>
      <Text>Vacinas marcadas como sim:</Text>
      <View>
        {respostas.map((vacina, index) => (
          <Text key={index}>{vacina}</Text>
        ))}
      </View>
      <Text>Vacinas marcadas como não:</Text>
      {/* Adicione aqui a lógica para mostrar visualmente as vacinas marcadas como não */}
    </View>
  );
};

export default CartaoVacinaScreen;
