import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReclamacoesScreen = () => {
  const options = [
    'Acesso ao sistema',
    'Atendimento ao aluno',
    'Problema com conceitos',
    'Infraestrutura escolar',
    'Outros',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Realizar Reclamação</Text>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    padding: 20,
  },
  optionButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ReclamacoesScreen;
