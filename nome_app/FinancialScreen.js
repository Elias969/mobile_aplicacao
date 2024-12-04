import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function FinancialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setor Financeiro</Text>

      {/* Informações de Mensalidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mensalidades</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Último pagamento:</Text>
          <Text style={styles.infoDetail}>15/11/2024</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Próximo vencimento:</Text>
          <Text style={styles.infoDetail}>15/12/2024</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Valor pendente:</Text>
          <Text style={styles.infoDetail}>R$ 450,00</Text>
        </View>
      </View>

      {/* Contato com o Setor Financeiro */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <View style={styles.contactItem}>
          <MaterialCommunityIcons name="whatsapp" size={20} color="#6200ea" />
          <Text style={styles.contactText}>(81) 98765-4321</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="phone" size={20} color="#6200ea" />
          <Text style={styles.contactText}>(81) 3456-7890</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="email" size={20} color="#6200ea" />
          <Text style={styles.contactText}>financeiro@escola.com</Text>
        </View>
      </View>

      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Substitua pelo link desejado
    const url = 'https://www.sicadi.com.br/mhouse/boleto/boleto3.php?numero_banco=341-7&local_pagamento=PAG%C1VEL+EM+QUALQUER+BANCO+AT%C9+O+VENCIMENTO&cedente=Mediotec+SENAC&data_documento=03%2F12%2F2024&numero_documento=DF+00113&especie=&aceite=N&data_processamento=03%2F12%2F2024&uso_banco=&carteira=179&especie_moeda=Real&quantidade=&valor=&vencimento=03%2F12%2F2024&agencia=0049&codigo_cedente=10201-5&meunumero=00010435&valor_documento=260%2C00&instrucoes=Taxa+de+visita+de+suporte%0D%0AAp%F3s+o+vencimento+R%24+0%2C80+ao+dia&mensagem1=&mensagem2=&mensagem3=ATEN%C7%C3O%3A+N%C3O+RECEBER+AP%D3S+15+DIAS+DO+VENCIMENTO&sacado=&Submit=Enviar'; 
    Linking.openURL(url).catch((err) => 
      console.error('Erro ao abrir o link:', err)
    );
  }}
>
  <Text style={styles.buttonText}>Acessar Faturas</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#6200ea',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333333',
  },
  infoDetail: {
    fontSize: 16,
    color: '#6200ea',
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});