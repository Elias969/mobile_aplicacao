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
    { materia: 'Português', bimestre1: 8.5, bimestre2: 9.0, bimestre3: 7.5 },
    { materia: 'Matemática', bimestre1: 7.0, bimestre2: 8.0, bimestre3: 7.5 },
    { materia: 'Biologia', bimestre1: 9.0, bimestre2: 8.5, bimestre3: 8.0 },
    { materia: 'Física', bimestre1: 7.5, bimestre2: 8.5, bimestre3: 7.0 },
    { materia: 'Química', bimestre1: 8.0, bimestre2: 8.5, bimestre3: 7.5 },
    { materia: 'História', bimestre1: 9.5, bimestre2: 9.0, bimestre3: 8.5 },
    { materia: 'Geografia', bimestre1: 8.0, bimestre2: 8.5, bimestre3: 9.0 },
    { materia: 'Ed. Física', bimestre1: 10.0, bimestre2: 10.0, bimestre3: 10.0 },
    { materia: 'Sociologia', bimestre1: 8.5, bimestre2: 9.0, bimestre3: 8.0 },
    { materia: 'Filosofia', bimestre1: 9.0, bimestre2: 9.5, bimestre3: 9.0 },
    { materia: 'Tecnologia/Informática', bimestre1: 10.0, bimestre2: 9.5, bimestre3: 9.0 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

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
          {materias.map((materiaObj, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{materiaObj.materia}</Text>
              <Text style={styles.cell}>{materiaObj.bimestre1}</Text>
              <Text style={styles.cell}>{materiaObj.bimestre2}</Text>
              <Text style={styles.cell}>{materiaObj.bimestre3}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={openFullReport}>
        <Text style={styles.buttonText}>Visualizar completo</Text>
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
    backgroundColor: '#3A3CDE',
    padding: 20,
    alignItems: 'center',
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
