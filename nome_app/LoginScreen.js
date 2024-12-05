import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Login com validação simples para teste
    if (matricula === "aluno" && senha === "123456") {
      navigation.replace("Drawer"); // Vai para o DrawerNavigator
    } else {
      alert("Matrícula ou senha inválida.");
    }
  };

  const handleForgotPassword = () => {
    alert("Função 'Esqueci a senha' não implementada."); // Placeholder
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/images/mediotec-mobile.png")} // Atualize o caminho da imagem
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueci a senha</Text>
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
    flex: 2,
    backgroundColor: "#0B3CFF", // Azul do cabeçalho
    borderBottomLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
  },
  form: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF007F", // Rosa do botão
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#FF007F", // Rosa do texto
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
