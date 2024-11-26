import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página Inicial</Text>
    </View>
  );
}

function OtherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Outra Página</Text>
    </View>
  );
}

// Menu personalizado
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>

      <DrawerItem
        label="Calendário"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialCommunityIcons name="calendar" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Comunicados"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialCommunityIcons name="bell-alert" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Other')}
      />
      <DrawerItem
        label="Boletim"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="assessment" size={24} color="#ff4081" />}
        onPress={() => {}}
      />
      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substituir com o logo real
          style={styles.logo}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: styles.drawerStyle,
          headerStyle: {
            backgroundColor: '#6200ea',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true, // Mostra o cabeçalho
            title: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="Other"
          component={OtherScreen}
          options={{
            headerShown: true,
            title: 'Outra Página',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#6200ea',
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
  },
  menuTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  drawerStyle: {
    width: 240,
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff4081',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
