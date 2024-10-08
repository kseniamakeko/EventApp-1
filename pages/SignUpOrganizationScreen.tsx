import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SignUpOrganizationScreen({ navigation }) {
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [orgAddress, setOrgAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = () => {
    if (password.length < 6) {
      Alert.alert('Ошибка', 'Пароль должен содержать не менее 6 символов');
      return;
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      Alert.alert('Ошибка', 'Электронная почта должна быть домена @gmail.com');
      return;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Ошибка', 'Номер телефона должен содержать только цифры и быть длиной 11 символов');
      return;
    }

    const organizationProfile = {
      type: 'Organization',
      orgName,
      contactPerson,
      phone,
      website,
      orgAddress,
      email,
      password, 
    };

    signIn(organizationProfile);
    navigation.navigate('Profile');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Название организации"
          value={orgName}
          onChangeText={setOrgName}
        />
        <TextInput
          style={styles.input}
          placeholder="Контактное лицо"
          value={contactPerson}
          onChangeText={setContactPerson}
        />
        <TextInput
          style={styles.input}
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Website"
          value={website}
          onChangeText={setWebsite}
        />
        <TextInput
          style={styles.input}
          placeholder="Адрес организации"
          value={orgAddress}
          onChangeText={setOrgAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Зарегистрироваться" onPress={handleSubmit} color="#00668C" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4EAF7', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 45,
    borderColor: '#3498DB', 
    borderWidth: 2,
    borderRadius: 10, 
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF', 
    fontSize: 16,
    color: '#2E2E2E', 
  },
  button: {
    backgroundColor: '#00668C', 
    borderRadius: 10, 
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
