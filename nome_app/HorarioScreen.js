import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HorarioScreen = () => {
  const schedule = [
    { time: "9:00 - 10:00", segunda: "Matemática", terca: "", quarta: "", quinta: "", sexta: "" },
    { time: "10:00 - 11:00", segunda: "Biologia", terca: "Física", quarta: "", quinta: "", sexta: "" },
    { time: "11:00 - 12:00", segunda: "História", terca: "", quarta: "Química", quinta: "", sexta: "" },
    { time: "12:00 - 1:00", segunda: "Redação", terca: "", quarta: "", quinta: "", sexta: "Artes" },
  ];

  // Mapeia disciplinas para cores específicas
  const getColorForSubject = (subject) => {
    const colors = {
      Matemática: "#fde68a",
      Biologia: "#bbf7d0",
      Física: "#bfdbfe",
      Química: "#fca5a5",
      História: "#fcd34d",
      Redação: "#d9f99d",
      Artes: "#f0abfc",
    };
    return colors[subject] || "#f9fafb"; // Cor padrão caso a disciplina esteja vazia
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quadro de Horários</Text>

      <View style={styles.table}>
        {/* Cabeçalho */}
        <View style={styles.row}>
          <View style={[styles.cell, styles.timeCell]}>
            <MaterialCommunityIcons name="clock-outline" size={24} color="#6c63ff" />
          </View>
          <Text style={[styles.cell, styles.headerCell]}>SEGUNDA</Text>
          <Text style={[styles.cell, styles.headerCell]}>TERÇA</Text>
          <Text style={[styles.cell, styles.headerCell]}>QUARTA</Text>
          <Text style={[styles.cell, styles.headerCell]}>QUINTA</Text>
          <Text style={[styles.cell, styles.headerCell]}>SEXTA</Text>
        </View>

        {/* Horários */}
        {schedule.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={[styles.cell, styles.timeCell]}>{item.time}</Text>
            <Text
              style={[
                styles.cell,
                styles.contentCell,
                { backgroundColor: getColorForSubject(item.segunda) },
              ]}
            >
              {item.segunda}
            </Text>
            <Text
              style={[
                styles.cell,
                styles.contentCell,
                { backgroundColor: getColorForSubject(item.terca) },
              ]}
            >
              {item.terca}
            </Text>
            <Text
              style={[
                styles.cell,
                styles.contentCell,
                { backgroundColor: getColorForSubject(item.quarta) },
              ]}
            >
              {item.quarta}
            </Text>
            <Text
              style={[
                styles.cell,
                styles.contentCell,
                { backgroundColor: getColorForSubject(item.quinta) },
              ]}
            >
              {item.quinta}
            </Text>
            <Text
              style={[
                styles.cell,
                styles.contentCell,
                { backgroundColor: getColorForSubject(item.sexta) },
              ]}
            >
              {item.sexta}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  timeCell: {
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
    color: "#555",
  },
  headerCell: {
    backgroundColor: "#e0e7ff",
    fontWeight: "bold",
    color: "#333",
  },
  contentCell: {
    color: "#555",
  },
});

export default HorarioScreen;
