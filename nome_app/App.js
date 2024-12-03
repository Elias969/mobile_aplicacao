import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import HorarioScreen from './HorarioScreen';
import HomeScreen from './HomeScreen';
import ComunicadosScreen from './ComunicadosScreen';
import ReclamacoesScreen from './ReclamacoesScreen';

const Drawer = createDrawerNavigator();


function OtherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Outra Página</Text>
    </View>
  );
}

function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contatos</Text>
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quadro de Horários</Text>
    </View>
  );
}

// Menu 
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>

      <DrawerItem
        label="Home"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="home" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Home')}
      />
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
        onPress={() => props.navigation.navigate('Comunicados')}
      />

<DrawerItem
  label="Reclamações"
  labelStyle={styles.drawerLabel}
  icon={() => <MaterialCommunityIcons name="alert" size={24} color="#ff4081" />}
  onPress={() => props.navigation.navigate('Reclamacoes')}
/>
      <DrawerItem
        label="Boletim"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="assessment" size={24} color="#ff4081" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Contatos"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="contacts" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Contacts')}
      />
      <DrawerItem
  label="Quadro de Horários"
  labelStyle={styles.drawerLabel}
  icon={() => <MaterialCommunityIcons name="table-clock" size={24} color="#ff4081" />}
  onPress={() => props.navigation.navigate('Horario')} 
/>
      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} 
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
        <Drawer.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            headerShown: true,
            title: 'Contatos',
          }}
        />
        <Drawer.Screen
  name="Horario" 
  component={HorarioScreen}
  options={{
    headerShown: true,
    title: 'Quadro de Horários',
  }}
/>

<Drawer.Screen
  name="Comunicados"
  component={ComunicadosScreen}
  options={{
    headerShown: true,
    title: 'Comunicados',
  }}
/>
<Drawer.Screen
  name="Reclamacoes"
  component={ReclamacoesScreen}
  options={{
    headerShown: true,
    title: 'Reclamações',
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
