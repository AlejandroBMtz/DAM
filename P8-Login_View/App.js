import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setMessageColor('red');
      setMessage('Todos los campos son obligatorios');
      return;
    }

    if (!email.includes('@')) {
      setMessageColor('red');
      setMessage('El email debe ser válido (incluir @)');
      return;
    }

    if (password.length < 6) {
      setMessageColor('red');
      setMessage('La contraseña debe tener mínimo 6 caracteres');
      return;
    }

    setMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (email === 'admin@test.com' && password === '123456') {
        setMessageColor('#1db954');
        setMessage('Bienvenido!');
      } else {
        setMessageColor('red');
        setMessage('Credenciales incorrectas');
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/spotify_logo.png')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      {message !== '' && (
        <Text style={[styles.messageText, { color: messageColor }]}>
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828ff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#f3f3f3ff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#1db954',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  messageText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});