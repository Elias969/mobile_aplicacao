import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProtectedScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const fetchProtectedData = async () => {
    const token = await AsyncStorage.getItem("authToken");

    try {
      const response = await axios.get("http://<SEU_IP_LOCAL>:3000/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage(response.data.message);
      setUsername(response.data.user.username); // Usuário logado
    } catch (error) {
      Alert.alert(
        "Erro",
        error.response?.data?.error || "Falha ao acessar a rota protegida"
      );
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo, {username}!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.messageText}>{message || "Carregando dados..."}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    backgroundColor: "#0B3CFF", // Azul de fundo
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  messageText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#FF007F", // Rosa do botão
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProtectedScreen;
