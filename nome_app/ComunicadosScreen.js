import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ComunicadosScreen = () => {
  const comunicados = [
    require('./assets/images/imagem1.png'),
    require('./assets/images/imagem2.png'),
    require('./assets/images/imagem3.png'),
    require('./assets/images/imagem5.png'),
    require('./assets/images/imagem6.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comunicados</Text>
      </View>
      <ScrollView contentContainerStyle={styles.comunicadosContainer}>
        {comunicados.map((image, index) => (
          <Image key={index} source={image} style={styles.comunicadoImage} />
        ))}
      </ScrollView>
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
  comunicadosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  comunicadoImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default ComunicadosScreen;
