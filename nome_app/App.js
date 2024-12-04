import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ComunicadosScreen from './ComunicadosScreen';
import ReclamacoesScreen from './ReclamacoesScreen';
import HorarioScreen from './HorarioScreen';
import ContactsScreen from './ContactsScreen';
import FinancialScreen from './FinancialScreen';
import ConceitoScreen from './ConceitoScreen';
import AcademicScreen from './AcademicScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

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
        label="Quadro de Horários"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialCommunityIcons name="table-clock" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Horario')}
      />
      <DrawerItem
        label="Contatos"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="contacts" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Contacts')}
      />
<DrawerItem
        label="Financeiro"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="payment" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Financial')}  // Navegar para a tela de Financeiro
      />

<DrawerItem
        label="Conceitos"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="school" size={24} color="#ff4081" />}
        onPress={() => props.navigation.navigate('Conceito')}  // Navegar para a tela de Conceitos
      />
      <DrawerItem
        label="Academico"
        labelStyle={styles.drawerLabel}
        icon={() => <MaterialIcons name="book" size={24} color="#ff4081" />}  // Ícone de livro para Acadêmico
        onPress={() => props.navigation.navigate('Academico')}  // Navegar para a tela Acadêmica
      />
      {/* Botão de Sair */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => props.navigation.replace('Login')}
      >
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: '#6200ea', width: 240 },
        headerStyle: { backgroundColor: '#6200ea' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Comunicados" component={ComunicadosScreen} />
      <Drawer.Screen name="Reclamacoes" component={ReclamacoesScreen} />
      <Drawer.Screen name="Horario" component={HorarioScreen} />
      <Drawer.Screen name="Contacts" component={ContactsScreen} />
      <Drawer.Screen name="Financial" component={FinancialScreen} />
      <Drawer.Screen name="Conceito" component={ConceitoScreen} />
      <Drawer.Screen name="Academico" component={AcademicScreen} />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  menuTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#ff4081',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
