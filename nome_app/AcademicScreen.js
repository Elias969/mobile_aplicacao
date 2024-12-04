import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AcademicScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Acadêmicas</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Turma</Text>
            <Text style={styles.cell}>Disciplina</Text>
            <Text style={styles.cell}>Professor</Text>
          </View>
          
          {[
            { turma: '2º E', disciplina: 'Português', professor: 'Prof. João Silva' },
            { turma: '2º E', disciplina: 'Matemática', professor: 'Prof. Ana Souza' },
            { turma: '2º E', disciplina: 'Biologia', professor: 'Prof. Carlos Pereira' },
            { turma: '2º E', disciplina: 'Física', professor: 'Prof. Marta Lima' },
            { turma: '2º E', disciplina: 'Química', professor: 'Prof. Luiz Alves' },
            { turma: '2º E', disciplina: 'História', professor: 'Prof. Beatriz Costa' },
            { turma: '2º E', disciplina: 'Geografia', professor: 'Prof. Felipe Mendes' },
            { turma: '2º E', disciplina: 'Sociologia', professor: 'Prof. Sandra Rocha' },
            { turma: '2º E', disciplina: 'Filosofia', professor: 'Prof. Gabriel Souza' },
          ].map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.turma}</Text>
              <Text style={styles.cell}>{item.disciplina}</Text>
              <Text style={styles.cell}>{item.professor}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AcademicScreen;