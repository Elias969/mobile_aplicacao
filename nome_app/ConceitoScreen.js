import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ConceitoScreen = () => {
    const openFullReport = () => {
      // Link para o PDF ou página que você quer abrir
      const url = 'https://docs.google.com/document/d/1mUR1VB6bWyvb9iXUONTMaMweKuT6gcAHZOvsbdlpLsY/edit?hl=pt-br&tab=t.0'; // Substitua pelo seu link
  
      // Tenta abrir o link
      Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link: ', err));
    };
  const materias = [
    'Português',
    'Matemática',
    'Biologia',
    'Física',
    'Química',
    'História',
    'Geografia',
    'Ed. Física',
    'Sociologia',
    'Filosofia',
    'Tecnologia/Informática',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <ScrollView contentContainerStyle={styles.boletimContainer}>
        <Text style={styles.title}>
          Boletim <Text style={styles.icon}></Text>
        </Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell]}>DISCIPLINA</Text>
            <Text style={[styles.cell, styles.headerCell]}>1º BIMESTRE</Text>
            <Text style={[styles.cell, styles.headerCell]}>2º BIMESTRE</Text>
            <Text style={[styles.cell, styles.headerCell]}>3º BIMESTRE</Text>
          </View>
          {materias.map((materia, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{materia}</Text>
              <Text style={styles.cell}></Text>
              <Text style={styles.cell}></Text>
              <Text style={styles.cell}></Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={openFullReport}>
        <Text style={styles.buttonText}>Visualizar completo</Text>
        onPress
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#',
    padding: 20,
    alignItems: 'center',
  },
  studentName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  studentInfo: {
    color: '#fff',
    fontSize: 14,
  },
  boletimContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
  },
  table: {
    borderWidth: 1,
    borderColor: '#3A3CDE',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#3A3CDE',
  },
  headerCell: {
    backgroundColor: '#3A3CDE',
    color: '#fff',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#3A3CDE',
    paddingVertical: 14,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConceitoScreen;