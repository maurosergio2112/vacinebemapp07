import React from 'react';
import { View, Text, Button, Switch } from 'react-native';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';


const schema = yup.object().shape({
  tetravalente: yup.boolean(),
  pneumococica: yup.boolean(),
  hepatiteB: yup.boolean(),
  febreAmarela: yup.boolean(),
  hpv4: yup.boolean(),
  vacinaVSR: yup.boolean(),
  vacinaDuplaBacteriana: yup.boolean(),
});

const QuestionarioScreen = ({ navigation }) => {
  const initialValues = {
    tetravalente: false,
    pneumococica: false,
    hepatiteB: false,
    febreAmarela: false,
    hpv4: false,
    vacinaVSR: false,
    vacinaDuplaBacteriana: false,
  };

  const handleSubmit = async (values) => {
    try {
      // Salvando as respostas do questionário no AsyncStorage
      await AsyncStorage.setItem('respostasQuestionario', JSON.stringify(values));
      console.log('Respostas do questionário salvas com sucesso:', values);

      // Aqui você pode navegar para a próxima tela ou fazer qualquer outra coisa que desejar
      navigation.navigate('PróximaTela');
    } catch (error) {
      console.error('Erro ao salvar as respostas do questionário:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Questionário de Vacina</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <View>
            <Field name="tetravalente" component={CheckBox} />
            <Field name="pneumococica" component={CheckBox} />
            <Field name="hepatiteB" component={CheckBox} />
            <Field name="febreAmarela" component={CheckBox} />
            <Field name="hpv4" component={CheckBox} />
            <Field name="vacinaVSR" component={CheckBox} />
            <Field name="vacinaDuplaBacteriana" component={CheckBox} />
            <Button title="Enviar" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const CheckBox = ({ field }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text>{field.name}</Text>
    <Switch
      value={field.value}
      onValueChange={field.onChange(field.name, !field.value)}
    />
  </View>
);

export default QuestionarioScreen;
