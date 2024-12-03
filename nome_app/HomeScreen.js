import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Atividade de Matemática (27/11)', done: false },
    { id: '2', title: 'Revisão Biologia', done: false },
    { id: '3', title: 'Redação', done: false },
    { id: '4', title: 'Ensaio Clube de Dança', done: false },
    { id: '5', title: 'Atividade de Português', done: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>João Ferreira</Text>
          <Text style={styles.subtitle}>Estudante (2º E)</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Quadro de Avisos */}
      <ScrollView style={styles.noticeSection}>
        <Text style={styles.sectionTitle}>Quadro de Avisos</Text>
        <ScrollView horizontal style={styles.noticeBoard}>
          <Image
            source={require('./assets/images/imagem1.png')}
            style={styles.noticeImage}
          />
          <Image
            source={require('./assets/images/imagem2.png')}
            style={styles.noticeImage}
          />
          <Image
            source={require('./assets/images/imagem3.png')}
            style={styles.noticeImage}
          /> 
          <Image
            source={require('./assets/images/imagem5.png')}
            style={styles.noticeImage}
          />
          <Image
            source={require('./assets/images/imagem6.png')}
            style={styles.noticeImage}
          />
        </ScrollView>

        {/* Lista de Tarefas */}
        <Text style={styles.sectionTitle}>Tarefas</Text>
      </ScrollView>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text
              style={item.done ? styles.taskDone : styles.taskTitle}
              onPress={() => toggleTask(item.id)}
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 15,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 15,
  },
  noticeSection: {
    flex: 1,
  },
  noticeBoard: {
    paddingLeft: 15,
    marginBottom: 10,
  },
  noticeImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#201AE8',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  taskDone: {
    fontSize: 16,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default HomeScreen;
