import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const AbasVacinas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tetravalente" component={TetravalenteScreen} />
      <Tab.Screen name="Pneumocócica Conjugada" component={PneumococicaScreen} />
      <Tab.Screen name="Hepatite B" component={HepatiteBScreen} />
      <Tab.Screen name="Febre Amarela" component={FebreAmarelaScreen} />
      <Tab.Screen name="HPV4" component={HPV4Screen} />
      <Tab.Screen name="Vacina VSR" component={VacinaVSRScreen} />
      <Tab.Screen name="Vacina Dupla Bacteriana" component={VacinaDuplaBacterianaScreen} />
    </Tab.Navigator>
  );
};

const TetravalenteScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina tetravalente.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}
  </ScrollView>
);

const PneumococicaScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina pneumocócica conjugada.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina pneumocócica conjugada */}
  </ScrollView>
);

const HepatiteBScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina hepatite B.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina hepatite B */}
  </ScrollView>
);

const FebreAmarelaScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina febre amarela.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina febre amarela */}
  </ScrollView>
);

const HPV4Screen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina HPV4.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina HPV4 */}
  </ScrollView>
);

const VacinaVSRScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina VSR.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina VSR */}
  </ScrollView>
);

const VacinaDuplaBacterianaScreen = () => (
  <ScrollView>
    <Text>Informações sobre a vacina dupla bacteriana.</Text>
    {/* Adicione aqui as informações textuais sobre a vacina dupla bacteriana */}
  </ScrollView>
);

export default AbasVacinas;
