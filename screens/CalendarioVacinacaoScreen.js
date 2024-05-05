import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

const CalendarioVacinaScreen = () => {
  // Dados das vacinas
  const textoVacinas = `De acordo com o Calendário Técnico Nacional de Vacinação do Adulto e do Idoso e o CALENDÁRIO DE VACINAÇÃO SBIm IDOSO, as seguintes vacinas são recomendadas:

  - Hepatite B (Hb-recombinante): Administrada em três doses, no esquema 0-1-6 meses. Disponível em unidades básicas de saúde.
  
  - Difteria e Tétano (dT): Recomendadas para iniciar ou completar três doses, de acordo com o histórico vacinal. Encontradas em unidades básicas de saúde.
  
  - Febre Amarela (VFA - atenuada): Contra a febre amarela, administrada em dose única. Disponível em unidades básicas de saúde e clínicas privadas de vacinação.
  
  - Sarampo, caxumba, rubéola (SCR - atenuada) (Tríplice viral): Indicada em situações de risco aumentado. Uma dose. Disponível somente em clínicas privadas de vacinação, dependendo do risco epidemiológico e da situação individual de suscetibilidade.
  
  - Papilomavírus Humano (HPV): Recomendadas três doses para vítimas de abuso sexual (homens e mulheres). Disponível na rede pública e privada.
  
  - Difteria, Tétano, Pertussis (dTpa - acelular): Contra difteria, tétano e coqueluche. Recomendada para profissionais da saúde, parteiras tradicionais, estagiários da área da saúde (que atuam em maternidades e unidades de internação neonatal), e pessoas portadoras de papilomatose respiratória recorrente (PPR) a partir de 1 ano de idade. Disponível na rede pública somente para profissionais da saúde e na rede privada de vacinação, mediante prescrição médica.
  
  O Herpes Zóster é uma condição dermatológica desencadeada pelo Vírus Varicela-Zoster (VVZ), o mesmo responsável pela catapora. Após a ocorrência da catapora, o vírus permanece latente no corpo ao longo da vida, podendo ser reativado na idade adulta ou em indivíduos com baixa imunidade, como aqueles afetados por doenças crônicas como hipertensão, diabetes, câncer, AIDS, pacientes submetidos a transplantes, entre outros. O esquema de vacinação recomendado é com a vacina inativada contra o Herpes Zóster (VZR), administrada em duas doses com um intervalo de dois meses (0-2). Esta vacina está disponível exclusivamente em clínicas privadas de vacinação.`;

  const vacinas = [
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: null,
      vacina: '(high dose, HD4V)',
      protecaoContra: 'Influenza',
      numeroDoses: 'dose única',
      intervaloDoses: 'dose única',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: null,
      vacina: 'Pneumocócicas conjugada',
      protecaoContra: '(Pneumonia Meningite e Otite)',
      numeroDoses: '3 doses',
      intervaloDoses: 'não',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: null,
      vacina: 'Hepatite B recombinante)',
      protecaoContra: 'Hepatite B',
      numeroDoses: '3 doses',
      intervaloDoses: 'não',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    // Adicione mais vacinas conforme necessário
  ];

  return (
    <ScrollView>
      {vacinas.map((vacina, index) => (
        <Card key={index} containerStyle={styles.card}>
           <View style={styles.row}>
            <Text style={styles.label}>VACINA:</Text>
            <Text style={styles.text}>{vacina.vacina}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>PROTEÇÃO CONTRA:</Text>
            <Text style={styles.text}>{vacina.protecaoContra}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>QUANDO INDICAR:</Text>
            <Text style={styles.text}>{vacina.quandoIndicar}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>IDADE RECOMENDADA ou GRUPO:</Text>
            <Text style={styles.text}>{vacina.idadeGrupo}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>NÚMERO DE DOSES:</Text>
            <Text style={styles.text}>{vacina.numeroDoses}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>INTERVALO ENTRE AS DOSES:</Text>
            <Text style={styles.text}>{vacina.intervaloDoses}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Disponibilidade UBS:</Text>
            <Text style={styles.text}>{vacina.disponibilidadeUBS}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Disponibilidade Privado:</Text>
            <Text style={styles.text}>{vacina.disponibilidadePrivado}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
});

export default CalendarioVacinaScreen;
