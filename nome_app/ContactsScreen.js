import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function SchoolContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos escolares</Text>

      {/* Coordenação */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Coordenação</Text>
        <View style={styles.contactItem}>
          <MaterialIcons name="phone" size={20} color="#6200ea" />
          <Text style={styles.contactText}>(81) 3456-7890</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="email" size={20} color="#6200ea" />
          <Text style={styles.contactText}>senac.mediotec@gmail.com</Text>
        </View>
      </View>

      {/* Administrativo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Administrativo</Text>
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
          <Text style={styles.contactText}>senac.mediotec@gmail.com</Text>
        </View>
      </View>
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
});
