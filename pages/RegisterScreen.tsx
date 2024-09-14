import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const { signIn } = useAuth();

  const handleVolunteerPress = async () => {
    const userData = { userType: 'Volunteer' }; 
    await signIn(userData);
    navigation.navigate('SignUpVolunteer');
  };

  const handleOrganizationPress = async () => {
    const userData = { userType: 'Organization' }; 
    await signIn(userData);
    navigation.navigate('SignUpOrganization');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Вы проходите регистрацию как</Text>
      <Button title="Волонтер" onPress={handleVolunteerPress} />
      <Button title="Организатор" onPress={handleOrganizationPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  txt:{
    textAlign: 'center'
  }
});
